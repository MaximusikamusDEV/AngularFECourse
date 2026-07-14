import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[stock]',
  standalone: false,
  host: {
    '[style.color]': 'color',
    '[style.backgroundColor]': 'backgroundColor'
  }
})
export class AvailabilityColorDirective {
  @Input({required: true}) stock!: number;

  get color(): string{
    if (this.stock >= 10){
      return '#176b2c';
    }

    if (this.stock > 0){
      return '#8a5b00';
    }

    return '#a61b1b';
  }

  get backgroundColor(): string{
    if (this.stock >= 10){
      return '#e1f7e7';
    }

    if (this.stock > 0){
      return '#e1f7e7';
    }

    return '#fde4e4';
  }
}
