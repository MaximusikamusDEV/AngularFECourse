import {Component, EventEmitter, Output} from '@angular/core';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  standalone: false,
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  @Output() searchQueryChange: EventEmitter<string> = new EventEmitter();

  onSearchQueryChange(value: string) {
    this.searchQueryChange.emit(value);
  }
}
