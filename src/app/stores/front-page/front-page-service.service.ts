import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, forkJoin, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Product} from "src/app/user/shopping-cart/model/product.model";
import {ProductDigital} from "src/app/stores/model/product-digital";
import {Category} from "src/app/stores/model/category";

@Injectable({
  providedIn: 'root'
})
export class FrontPageServiceService {

  productData: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  productsDigitalContent: BehaviorSubject<ProductDigital[]> = new BehaviorSubject<ProductDigital[]>([]);

  constructor(private http: HttpClient) { }

  // Get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<any>('/products', {headers: { skip: 'true' }}).pipe(
      map( response => {
          if (response) return response._embedded.products;
          else return null;
        }
      )
    )
  }

  // Get all products
  getProductsDigitalContent(): Observable<ProductDigital[]> {
    return this.http.get<any>('/productDigitalAssets/', {headers: { skip: 'true' }}).pipe(
      map( response => {
          if (response) return response;
          else return null;
        }
      )
    )
  }

  // Get all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<any>('/categories', {headers: { skip: 'true' }}).pipe(
      map(response => {
        if (response) return response._embedded.categories;
        else return null;
      })
    )
  }
}
