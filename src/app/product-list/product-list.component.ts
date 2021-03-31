import { Component, OnInit } from '@angular/core';
// import { products } from '../products';
import { DataService } from '../data.service';


interface IProduct {
  id: number;
  name: string;
  price: number;
  description?: string;
  img?: string;
}

interface IProducts extends Array<IProduct>{}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: IProducts = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts(): void {
    this.products = this.dataService.getProducts();
  }

  addProductToCart(product: any): void {
    this.dataService.addToCart(product);
  }

}
