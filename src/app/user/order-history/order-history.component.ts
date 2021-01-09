import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'total', 'status', 'action'];
  dataSource = ORDERS;

  constructor() { }

  ngOnInit(): void {
  }
}

export interface Order {
  id: string;
  date: string;
  total: string;
  status: string;
  action: string;
}

const ORDERS: Order[] = [
  {id: "110183471", date:	"8/15/2020"	,    total: "$34.01", status: "Complete", action: "View Order | Reorder"},
  {id: "109197824", date:	"4/4/2020"	,    total: "$37.90", status: "Complete", action: "View Order | Reorder"},
  {id: "108743057", date:	"12/20/2019",	 total: "$42.15", status: "Complete", action: "View Order | Reorder"},
  {id: "4810700", date:	"3/9/2019"	,    total: "$40.49", status: "Complete", action: "View Order | Reorder"},
  {id: "4747930", date:	"2/15/2019"	,    total: "$25.13", status: "Complete", action: "View Order | Reorder"},
  ];
