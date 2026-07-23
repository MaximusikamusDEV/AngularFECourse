import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  standalone: false,
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {
  @Output() countChange = new EventEmitter<number>();
  @Input({required: true}) stock!: number;
  @Input({required: true}) count: number = 0;

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
