import { Component } from '@angular/core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  standalone: false,
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {
  protected readonly faStarSolid = faStarSolid;
}
