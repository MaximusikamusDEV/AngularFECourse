import {Component, inject, Input, OnInit} from '@angular/core';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {CartService} from '../shared/service/cart/cart.service';
import {Cart} from '../shared/models/cart/cart';

@Component({
  selector: 'app-minicart',
  templateUrl: './mini-cart.component.html',
  standalone: false,
  styleUrl: './mini-cart.component.scss'
})
export class MiniCartComponent implements OnInit {
  private cartService = inject(CartService);
  protected readonly faCartShopping = faCartShopping;
  @Input({required: true}) cartCount: number = 0;

  /*TODO: ПОМЕНЯТЬ id юзера*/
  ngOnInit(): void {
    this.cartService.getCartByUserId(1).subscribe((cart: Cart) => {
      cart.products.forEach(product => {
        this.cartCount += product.count;
      })
    });
  }
}
