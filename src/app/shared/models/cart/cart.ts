import {CartProduct} from '../product/cart-product';

export interface Cart {
  id: number;
  userId: number;
  products: CartProduct[];
}
