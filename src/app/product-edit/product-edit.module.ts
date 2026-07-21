import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {SharedModule} from '../shared/shared.module';
import {ProductEditRoutingModule} from './product-edit-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductEditRoutingModule,
    FormsModule,
  ]
})
export class ProductEditModule { }
