import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  standalone: false,
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {
  count = 0;
  @Output() countChange = new EventEmitter<number>();

  cartIncrement(){
    this.count++;
    this.countChange.emit(this.count);
  }

  cartDecrement(){
    if(this.count >= 1){
      this.count--;
      this.countChange.emit(this.count);
    }
  }
}
