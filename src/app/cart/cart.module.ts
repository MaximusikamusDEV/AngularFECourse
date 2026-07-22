import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart/cart.component';
import {PaginationComponent} from '../pagination/pagination.component';
import {SharedModule} from '../shared/shared.module';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {CartProductComponent} from '../cart-product/cart-product.component';

@NgModule({
  declarations: [
    CartComponent,
    PaginationComponent,
    CartProductComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    FaIconComponent
  ]
})
export class CartModule { }
