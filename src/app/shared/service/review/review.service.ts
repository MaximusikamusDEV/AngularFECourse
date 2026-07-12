import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Review} from '../../models/review/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/reviews';

  getReviewsByProductId(productId: number): Observable<Review[]> {
  return this.httpClient.get<Review[]>(`${this.apiUrl}?productId=${productId}`);
  }
}
