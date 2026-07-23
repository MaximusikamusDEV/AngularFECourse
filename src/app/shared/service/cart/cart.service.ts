import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, switchMap} from 'rxjs';
import {Cart} from '../../models/cart/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private httpClient: HttpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/cart';

  getCartByUserId(userId: number): Observable<Cart> {
    return this.httpClient.get<Cart[]>(`${this.apiUrl}?userId=${userId}`).pipe(
      map(carts => carts[0]),
    )
  }

  removeCartProductById(userId: number, productId: number): Observable<Cart> {
    return this.httpClient.get<Cart[]>(`${this.apiUrl}?userId=${userId}`).pipe(
      map(carts => carts[0]),
      map(cart => ({
        ...cart,
        products: cart.products.filter((product) => product.id !== productId)
      })),
      switchMap(updatedCart =>
        this.httpClient.put<Cart>(`${this.apiUrl}/${updatedCart.id}`, updatedCart)
      )
    )
  }
}
