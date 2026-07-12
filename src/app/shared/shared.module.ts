import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductFilterPipe} from './pipes/product-filter.pipe';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {AddToCartComponent} from '../add-to-cart/add-to-cart.component';
import {SearchBoxComponent} from '../search-box/search-box.component';
import {MiniCartComponent} from '../minicart/mini-cart.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {LogoutComponent} from '../logout/logout.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AvailabilityColorDirective} from './directives/availability-color/availability-color.directive';

@NgModule({
  declarations: [
    ProductFilterPipe,
    FooterComponent,
    HeaderComponent,
    AddToCartComponent,
    LogoutComponent,
    SearchBoxComponent,
    MiniCartComponent,
    NavBarComponent,
    AvailabilityColorDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    ProductFilterPipe,
    FooterComponent,
    AddToCartComponent,
    LogoutComponent,
    SearchBoxComponent,
    MiniCartComponent,
    NavBarComponent,
    HeaderComponent,
    AvailabilityColorDirective
  ]
})
export class SharedModule { }
