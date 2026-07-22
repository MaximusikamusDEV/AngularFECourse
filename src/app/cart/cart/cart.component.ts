import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {CartProduct} from '../../shared/models/product/cart-product';
import {Cart} from '../../shared/models/cart/cart';
import {CartService} from '../../shared/service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: false,
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService);
  protected cart!: Cart;
  protected currentPage = 1;
  protected pageSizeItems = 4;

  ngOnInit(): void {
    /*TODO:  тут когда аутентификация будет нужно передавать не 1, а id usera*/
    this.cartService.getCartByUserId(1).subscribe(
      cart => {
        this.cart = cart;
      }
    );
  }

  get totalPages(): number {
    return Math.ceil(this.cart.products.length / this.pageSizeItems);
  }

  get pagedCartProducts(): CartProduct[] {
    const start = (this.currentPage - 1) * this.pageSizeItems;
    return this.cart.products.slice(start, start + this.pageSizeItems);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}
