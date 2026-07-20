import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductFilters} from '../shared/models/product/product-filters';
import {NgIf} from '@angular/common';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-applied-filter-badges',
  imports: [
    NgIf,
    FaIconComponent
  ],
  templateUrl: './applied-filter-badges.component.html',
  styleUrl: './applied-filter-badges.component.scss'
})
export class AppliedFilterBadgesComponent {
  @Input() filters!: ProductFilters;
  @Output() filterRemoved = new EventEmitter<keyof ProductFilters>();
  protected readonly faXMark = faXmark;

  removeFilter(filterName: keyof ProductFilters): void {
    this.filterRemoved.emit(filterName);
  }

  hasActiveFilters(): boolean {
    return (
      this.filters.priceFrom !== null ||
      this.filters.priceTo !== null ||
      this.filters.ratingFrom !== null ||
      this.filters.ratingTo !== null ||
      this.filters.inStock ||
      this.filters.hasReviews
    );
  }
}
