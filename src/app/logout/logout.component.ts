import {Component} from '@angular/core';
import {faSignOut} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  standalone: false,
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  protected readonly faSignOut = faSignOut
}
