import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule)
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./product-details/product-details.module').then((module) => module.ProductDetailsModule)
  },
  {
    path: 'product/edit/:id',
    loadChildren: () =>
      import('./product-edit/product-edit.module').then((module) => module.ProductEditModule)
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((module) => module.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
