import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {Review} from '../shared/models/review/review';
import {SharedModule} from '../shared/shared.module';

@Component({
  selector: 'app-product-stock',
  imports: [
    NgIf,
    SharedModule
  ],
  templateUrl: './product-stock.component.html',
  styleUrl: './product-stock.component.scss'
})
export class ProductStockComponent {
@Input({required: true}) stock!: number;
}
