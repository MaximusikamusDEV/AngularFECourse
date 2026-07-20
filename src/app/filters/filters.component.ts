import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../shared/models/product/product';
import {ProductFilters} from '../shared/models/product/product-filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  standalone: false,
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Output() appliedFilters: EventEmitter<any> = new EventEmitter();
  @Output() clearedFilters: EventEmitter<void> = new EventEmitter();
  @Input() set filtersToForm(filters: ProductFilters) {
    this.filterForm.patchValue(filters, {
      emitEvent: false
    })
  }

  readonly filterForm = new FormGroup({
    priceFrom: new FormControl<number | null>(null, [
      Validators.min(0)
    ]),
    priceTo: new FormControl<number | null>(null, [
      Validators.min(0)
    ]),
    ratingFrom: new FormControl<number | null>(null, [
      Validators.min(0),
      Validators.max(5)
    ]),
    ratingTo: new FormControl<number | null>(null, [
      Validators.min(0),
      Validators.max(5)
    ]),
    inStock: new FormControl(false, {
        nonNullable: true
      }
    ),
    hasReviews: new FormControl(false, {
      nonNullable: true
    })
  });

  applyFilters(): void {
    if (this.filterForm.invalid) {
      this.filterForm.markAsTouched();
      return;
    }

    this.appliedFilters.emit(this.filterForm.getRawValue());
  }

  clearFilters(): void {
    this.filterForm.reset({
        priceFrom: null,
        priceTo: null,
        ratingFrom: null,
        ratingTo: null,
        hasReviews: false,
        inStock: false
      }
    );

    this.clearedFilters.emit();
  }
}
