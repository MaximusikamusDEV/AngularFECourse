import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() searchQueryChange = new EventEmitter<string>();
  @Input({required:true}) countInCart: number = 0;

  onSearchQueryChange(searchQuery: string) {
    this.searchQueryChange.emit(searchQuery);
  }
}
