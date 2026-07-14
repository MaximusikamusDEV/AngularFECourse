import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ReviewItemComponent} from '../review-item/review-item.component';
import {Review} from '../shared/models/review/review';

@Component({
  selector: 'app-product-reviews',
  imports: [
    NgIf,
    ReviewItemComponent,
    NgForOf
  ],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.scss'
})
export class ProductReviewsComponent {
  @Input({required: true}) reviews!: Review[];
}
