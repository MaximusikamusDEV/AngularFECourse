import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProductStockComponent} from '../product-stock/product-stock.component';
import {ProductReviewsComponent} from '../product-reviews/product-reviews.component';


@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    FontAwesomeModule,
    SharedModule,
    ProductStockComponent,
    ProductReviewsComponent,
  ]
})
export class ProductDetailsModule {}
