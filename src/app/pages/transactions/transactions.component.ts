import { Component, OnInit } from '@angular/core';
import { SlotService } from 'src/app/services/slot/slot.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  slots: any[] = [];

  constructor(private slotServ: SlotService) { }

  ngOnInit(): void {
    this.getSlots();
  }

  getSlots() {
    this.slotServ.getAllSlots().subscribe((res: any) => {
      this.slots = res;
    });
  }

  getTotal() {
    return this.slots.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
  }
}
