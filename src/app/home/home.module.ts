import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {ProductTileComponent} from '../product-tile/product-tile.component';
import {MiniCartComponent} from '../minicart/mini-cart.component';
import {SharedModule} from '../shared/shared.module';
import {FooterComponent} from '../footer/footer.component';
import {HomeComponent} from './component/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FiltersComponent} from '../filters/filters.component';
import {AddToCartComponent} from '../add-to-cart/add-to-cart.component';
import {DeleteProductComponent} from '../delete-product/delete-product.component';
import {SearchBoxComponent} from '../search-box/search-box.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppliedFilterBadgesComponent} from '../applied-filter-badges/applied-filter-badges.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductTileComponent,
    FiltersComponent,
    DeleteProductComponent,
  ],
  exports: [
    AddToCartComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppliedFilterBadgesComponent,
  ]
})
export class HomeModule { }
