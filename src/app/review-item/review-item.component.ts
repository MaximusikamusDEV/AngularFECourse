import {Component, Input} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Review} from '../shared/models/review/review';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review-item',
  imports: [
    FaIconComponent
  ],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.scss'
})
export class ReviewItemComponent {
  @Input({required: true}) review!: Review;
  protected readonly faStarSolid = faStarSolid;
}
