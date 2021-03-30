import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = this.dataService.getItems();
  constructor(private dataService: DataService) { }


  ngOnInit(): void {
  }
  clearCart(): any {
    this.dataService.clearCart();
  }

}
