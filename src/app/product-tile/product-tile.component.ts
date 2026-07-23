import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import {Product} from '../shared/models/product/product';
import {CartService} from '../shared/service/cart/cart.service';
import {Cart} from '../shared/models/cart/cart';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  standalone: false,
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent implements OnInit {
  protected readonly faStarSolid = faStarSolid;
  private cartService = inject(CartService);
  @Input({required: true}) product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() cart = new EventEmitter<Cart>();
  @Output() countInCart!: number;

  ngOnInit(): void {
    this.getProductCountInCart();
  }

  onDelete(productId: number) {
    this.deleteProduct.emit(productId);
  }

  /*TODO:  тут когда аутентификация будет нужно передавать не 1, а id usera*/
  getProductCountInCart() {
    this.cartService.getCartProductCount(1, this.product.id).subscribe((count) => {
      this.countInCart = count;
    });
  }

  /*TODO:  тут когда аутентификация будет нужно передавать не 1, а id usera*/
  onCountChange(count: number) {
    this.cartService.updateCartProductCount(1, this.product, count).subscribe(newCart =>
    this.cart.emit(newCart));
    this.countInCart = count;
  }
}
