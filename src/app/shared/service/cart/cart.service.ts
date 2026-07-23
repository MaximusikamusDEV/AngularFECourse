import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, switchMap} from 'rxjs';
import {Cart} from '../../models/cart/cart';
import {Product} from '../../models/product/product';
import {CartProduct} from '../../models/product/cart-product';

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

  updateCartProductCount(userId: number, product: Product, count: number): Observable<Cart> {
    return this.getCartByUserId(userId).pipe(
      map(cart => {
        const productInCart = cart.products.find(p => Number(p.id) === Number(product.id));
        let updatedProducts: CartProduct[];

        if (productInCart) {
          if (count === 0) {
            updatedProducts = cart.products.filter(p => Number(p.id) !== Number(product.id));
          } else {
            updatedProducts = cart.products.map(p =>
              Number(p.id) === Number(product.id) ? {...p, count: count} : p
            );
          }
        } else {
          const newProduct: CartProduct = {
            id: Number(product.id),
            title: product.title,
            count: count,
            price: product.price,
          };

          updatedProducts = [...cart.products, newProduct];
        }

        return {...cart, products: updatedProducts};
      }),
      switchMap(updatedCart =>
        this.httpClient.put<Cart>(`${this.apiUrl}/${updatedCart.id}`, updatedCart)
      )
    );
  }

  getCartProductCount(userId: number, productId: number): Observable<number> {
    return this.getCartByUserId(userId).pipe(
      map(cart => {
        const productInCart = cart.products.find(p => Number(p.id) === Number(productId));

        if (productInCart) {
          return productInCart.count;
        } else {
          return 0;
        }
      }),
    );
  }
}
