import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private urlApi = 'http://localhost:3000/product';

  constructor(private http: HttpClient) { }
  getProduct() {
    return this.http.get<any>(this.urlApi).pipe(
      tap((products) => {
        return products
      })
    );
  }
}
