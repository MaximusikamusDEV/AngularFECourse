import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../models/product/product';
import {ProductFilters} from '../../models/product/product-filters';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/`);
  }

  getProductsWithFilters(filters?: ProductFilters): Observable<Product[]>{
    let params = new HttpParams();

    if(filters?.priceFrom !== null && filters?.priceFrom !== undefined) {
      params = params.set('price_gte', filters.priceFrom);
    }

    if(filters?.priceTo !== null && filters?.priceTo !== undefined) {
      params = params.set('price_lte', filters.priceTo);
    }

    if(filters?.ratingFrom !== null && filters?.ratingFrom !== undefined) {
      params = params.set('rating.rate_gte', filters.ratingFrom);
    }

    if(filters?.ratingTo !== null && filters?.ratingTo !== undefined) {
      params = params.set('rating.rate_lte', filters.ratingTo);
    }

    if(filters?.inStock){
      params = params.set('stock_gte', 1)
    }

    return this.http.get<Product[]>(`${this.apiUrl}/`, { params });
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + `/${id}`);
  }

  updateProduct(product: Product): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${product.id}`, product);
  }
}
