import { Injectable } from '@angular/core';
import {products} from './products';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items = [] as any;

  constructor( private http: HttpClient ) { }

  getProducts(): any {
    return products;
  }

  addToCart(product: object): void {
    this.items.push(product);
  }

  getItems(): any {
    return this.items;
  }

  clearCart(): any {
    this.items = [];
    return this.items;
  }

  deleteItem(i: object): void {
    console.log(this.items);
    const index = this.items.indexOf(i);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    console.log(this.items);
  }

  getShippingPrices(): Observable<Array<object>> {
    let prices = this.http.get<{type: string, price: number}[]>('../shipping.json');
    return prices;
  }
}
