import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from '../../../shared/service/product.service';
import {Product} from '../../../shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  products: Product[] = [];
  searchQuery: string = '';

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  onDelete(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(product => product.id !== productId);
    })
  }

  onSearchQueryChange(query: string) {
    this.searchQuery = query;
  }
}
