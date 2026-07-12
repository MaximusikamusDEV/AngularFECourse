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
import {LogoutComponent} from '../logout/logout.component';
import {EditProductComponent} from '../edit-product/edit-product.component';
import {DeleteProductComponent} from '../delete-product/delete-product.component';
import {SearchBoxComponent} from '../search-box/search-box.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NavBarComponent,
    ProductTileComponent,
    MiniCartComponent,
    FooterComponent,
    SearchBoxComponent,
    FiltersComponent,
    AddToCartComponent,
    LogoutComponent,
    EditProductComponent,
    DeleteProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FontAwesomeModule,
  ]
})
export class HomeModule { }
