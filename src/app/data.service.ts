import { Injectable } from '@angular/core';
import {products} from './products';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items = [] as any;

  constructor() { }

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
}
