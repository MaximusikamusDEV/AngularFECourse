import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  standalone: false,
  styleUrl: './delete-product.component.scss'
})
export class DeleteProductComponent {
  @Input() productId!: number;
  @Output() deleteProduct = new EventEmitter<number>();

  onDelete(){
    this.deleteProduct.emit(this.productId);
  }
}
