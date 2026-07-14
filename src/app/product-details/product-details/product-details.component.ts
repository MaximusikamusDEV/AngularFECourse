import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from '../../shared/service/product/product.service';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../../shared/models/product/product';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import {Review} from '../../shared/models/review/review';
import {ReviewService} from '../../shared/service/review/review.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  standalone: false,
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  protected readonly faStarSolid = faStarSolid;
  private productService = inject(ProductService);
  private reviewService = inject(ReviewService);
  private productId!: number;
  product!: Product;
  reviews: Review[] = [];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if(id === null){
        return;
      }

      this.productId = Number(id);
      this.productService.getProductById(this.productId).subscribe(product => {this.product = product;});
      console.log(this.product);
      this.reviewService.getReviewsByProductId(this.productId).subscribe(reviews => {this.reviews = reviews;});
    })
  }

}
