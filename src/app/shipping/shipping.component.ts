import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts = this.dataService.getShippingPrices();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.shippingCosts);
  }

}
