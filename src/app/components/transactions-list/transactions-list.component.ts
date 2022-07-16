import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  @Input() transactions: any[] = [];
  headers: string[] = ['from', 'to', 'date', 'price', 'gain'];

  constructor() { }

  ngOnInit(): void {
  }

}
