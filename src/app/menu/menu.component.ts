import { Component, OnInit } from '@angular/core';
import { menuItems } from '../menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems = menuItems;
  constructor() { }

  ngOnInit(): void {
  }

}
