import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Cart} from '../../models/cart/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private httpClient: HttpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/cart';

  getCartByUserId(userId: number): Observable<Cart>{
    return this.httpClient.get<Cart[]>(`${this.apiUrl}?userId=${userId}`).pipe(
      map(carts => carts[0]),
    )
  }
}
