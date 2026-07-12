import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductFilterPipe} from './pipes/product-filter.pipe';

@NgModule({
  declarations: [ProductFilterPipe],
  imports: [
    CommonModule
  ],
  exports: [ProductFilterPipe]
})
export class SharedModule { }
