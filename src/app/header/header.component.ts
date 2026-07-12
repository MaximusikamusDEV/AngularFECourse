import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() searchQueryChange = new EventEmitter<string>();

  onSearchQueryChange(searchQuery: string) {
    this.searchQueryChange.emit(searchQuery);
  }
}
