import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private urlApi = 'http://localhost:3000/menu';
  private _menu: BehaviorSubject<any | null> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}
  get menu$(): Observable<any> {
    return this._menu.asObservable();
  }

  getMenu(){
    return this.http.get<any>(this.urlApi).pipe(
      tap((menu) => {
        this._menu.next(menu);
        
      })
    );
  }
}
