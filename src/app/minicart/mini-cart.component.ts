import { Component } from '@angular/core';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-minicart',
  templateUrl: './mini-cart.component.html',
  standalone: false,
  styleUrl: './mini-cart.component.scss'
})
export class MiniCartComponent {
  protected readonly faCartShopping = faCartShopping;
}
