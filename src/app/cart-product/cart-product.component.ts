import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {CartProduct} from '../shared/models/product/cart-product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  standalone: false,
  styleUrl: './cart-product.component.scss'
})
export class CartProductComponent {
  protected readonly faXMark = faXmark;
  @Input({required: true}) cartProduct!: CartProduct;
  @Output() deleteCartProduct = new EventEmitter<number>();

  onDeleteCartProduct(productId: number) {
    this.deleteCartProduct.emit(productId);
  }
}
