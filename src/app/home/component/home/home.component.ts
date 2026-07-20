import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from '../../../shared/service/product/product.service';
import {Product} from '../../../shared/models/product/product';
import {ProductFilters} from '../../../shared/models/product/product-filters';
import {ReviewService} from '../../../shared/service/review/review.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  private reviewService = inject(ReviewService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private emptyValues: ProductFilters = {
    priceFrom: null,
    priceTo: null,
    ratingFrom: null,
    ratingTo: null,
    inStock: false,
    hasReviews: false
  }
  activeFilters: ProductFilters = {...this.emptyValues}
  products: Product[] = [];
  searchQuery: string = '';
  filtersWereApplied: boolean = false;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const filters: ProductFilters = {
        priceFrom: this.getNumberParam(params.get('priceFrom')),
        priceTo: this.getNumberParam(params.get('priceTo')),
        ratingFrom: this.getNumberParam(params.get('ratingFrom')),
        ratingTo: this.getNumberParam(params.get('ratingTo')),
        inStock: (params.get('inStock') === 'true'),
        hasReviews: params.get('hasReviews') === 'true'
      }

      this.activeFilters = filters;

      const hasActiveFilters =
        filters.priceFrom !== null ||
        filters.priceTo !== null ||
        filters.ratingFrom !== null ||
        filters.ratingTo !== null ||
        filters.hasReviews ||
        filters.inStock;

      if (hasActiveFilters) {
        this.loadProducts(filters);
        return;
      }

      this.productService.getProducts().subscribe(products => this.products = products);
    })
  }

  onDelete(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(product => product.id !== productId);
    })
  }

  onSearchQueryChange(query: string) {
    this.searchQuery = query;
  }

  applyFilters(filters: ProductFilters) {
    this.activeFilters = filters;
    this.updateUrlWithFilters(filters);
    this.loadProducts(filters);
  }

  private loadProducts(filters: ProductFilters) {
    this.productService.getProductsWithFilters(filters).subscribe(products => {
      if (!filters.hasReviews) {
        this.products = products;
        this.filtersWereApplied = true;
        return;
      }

      this.reviewService.getReviews().subscribe(reviews => {
        this.products = products.filter(product =>
          reviews.some(review => Number(review.productId) === Number(product.id))
        )
      });

      this.filtersWereApplied = true;
    });
  }

  clearFilters() {
    this.clearUrlFromFilters()

    this.activeFilters = this.emptyValues

    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filtersWereApplied = false;
    })
  }

  removeFilter(filterName: keyof ProductFilters) {
    const filters: ProductFilters = {
      ...this.activeFilters,
      [filterName]: this.emptyValues[filterName]
    };

    this.updateUrlWithFilters(filters);
  }

  updateUrlWithFilters(filters: ProductFilters) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        priceFrom: filters.priceFrom,
        priceTo: filters.priceTo,
        ratingFrom: filters.ratingFrom,
        ratingTo: filters.ratingTo,
        inStock: filters.inStock ? true : null,
        hasReviews: filters.hasReviews ? true : null
      }
    });
  }

  clearUrlFromFilters() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        priceFrom: null,
        priceTo: null,
        ratingFrom: null,
        ratingTo: null,
        inStock: null,
        hasReviews: null
      }
    });
  }

  private getNumberParam(value: string | null): number | null {
    return value === null ? null : Number(value);
  }
}
