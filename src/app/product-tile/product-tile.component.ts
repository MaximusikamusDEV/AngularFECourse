import {Component, EventEmitter, Input, Output} from '@angular/core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  standalone: false,
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {
  protected readonly faStarSolid = faStarSolid;
  @Input({required: true}) product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  onDelete(productId: number) {
    this.deleteProduct.emit(productId);
  }
}
