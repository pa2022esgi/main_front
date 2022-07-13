import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSlotDialogComponent } from 'src/app/components/add-slot-dialog/add-slot-dialog.component';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  data = {}

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addSlot() {
    this.dialog.open(AddSlotDialogComponent, {
      width: '600px',
      data: { data : this.data },
      autoFocus: false,
      disableClose: true, 
    });
  }
}
