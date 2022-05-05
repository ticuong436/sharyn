import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';
import { Product } from './sanpham.type';

@Injectable({
    providedIn: 'root',
})
export class SanphamService {
    private urlApi = 'http://localhost:3000/product';
    private _products: BehaviorSubject<any | null> = new BehaviorSubject(null);
    private _menu: BehaviorSubject<any | null> = new BehaviorSubject(null);

    get products$(): Observable<Product[]> {
        return this._products.asObservable();
    }
    get menu$(): Observable<any> {
        return this._menu.asObservable();
    }
    constructor(private http: HttpClient) {}
    postProduct(data) {
        return this.products$.pipe(
            take(1),
            switchMap((proudcts) =>
                this.http.post(this.urlApi, data).pipe(
                    map((product) => {
                        console.log(product);
                        this._products.next([product, ...proudcts]);
                        return product;
                    })
                )
            )
        );
    }
    updateProduct(data) {
        return this.products$.pipe(
            take(1),
            switchMap((courses) =>
                this.http.patch(this.urlApi + `${data.id}`, data).pipe(
                    map((updateCourse) => {
                        // Find the index of the updated tag
                        const index = courses.findIndex(
                            (item) => item.id === item.id
                        );

                        // Update the tag
                        courses[index] = data;

                        // Update the tags
                        this._products.next(courses);

                        // Return the updated tag
                        return updateCourse;
                    })
                )
            )
        );
        // getMenu() {
        //     return this.http.get('https://v2api.timona.edu.vn/menu').pipe(
        //         map((menu) => {
        //             this._menu.next(menu);
        //             return menu;
        //         })
        //     );
        // }
    }
}
