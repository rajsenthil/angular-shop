import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  image: string;
  quantity: number;
  total: string;
}

const LINE_ITEMS: PeriodicElement[] = [
  {image: "https://github.com/rajsenthil/try01/raw/master/coding/docs/katie-smith-uQs1802D0CQ-unsplash.jpg", name: 'nallennai', quantity: 1, total: '$12.99'},
  {image: "https://github.com/rajsenthil/try01/raw/master/coding/docs/katie-smith-uQs1802D0CQ-unsplash.jpg", name: 'nallennai', quantity: 2, total: '$13.99'},
  {image: "https://github.com/rajsenthil/try01/raw/master/coding/docs/katie-smith-uQs1802D0CQ-unsplash.jpg", name: 'nallennai', quantity: 1, total: '$15.99'},
  {image: "https://github.com/rajsenthil/try01/raw/master/coding/docs/katie-smith-uQs1802D0CQ-unsplash.jpg", name: 'nallennai', quantity: 1, total: '$9.99'},
  {image: "https://github.com/rajsenthil/try01/raw/master/coding/docs/katie-smith-uQs1802D0CQ-unsplash.jpg", name: 'nallennai', quantity: 1, total: '$10.99'},
  ];

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'quantity', 'total'];
  dataSource = LINE_ITEMS;
  itemSize: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {

  }
}
