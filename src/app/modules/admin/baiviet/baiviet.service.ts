import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaivietService {

  private urlApi = 'http://localhost:3000/baiviet'
  post: any;
  private _baiviet: BehaviorSubject<any | null> = new BehaviorSubject(null);
  constructor(private http:HttpClient) { }

  get baiviet$(): Observable<any>{
    return this._baiviet.asObservable();
  }

  postBaiviet(data){
    return this.baiviet$.pipe(
      take(1),
      switchMap(baiviets => this.http.post(this.urlApi,data).pipe(
        map((baiviet)=>{
          console.log(baiviet);
          console.log(data);
          
          this._baiviet.next([baiviet,...baiviets ]);

          return baiviet
        })
      ))
    )
  }

}
