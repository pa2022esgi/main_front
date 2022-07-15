import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SlotService } from 'src/app/services/slot/slot.service';
import { PayDialogComponent } from '../pay-dialog/pay-dialog.component';

@Component({
  selector: 'app-slot-card',
  templateUrl: './slot-card.component.html',
  styleUrls: ['./slot-card.component.css'],
})
export class SlotCardComponent implements OnInit {
  @Input() slot: any | null;
  @Output() reload = new EventEmitter();

  constructor(
    private slotServ: SlotService,
    public auth: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteSlot() {
    this.slotServ.deleteSlot(this.slot._id).subscribe(() => {
      this.reload.emit();
    });
  }

  calculatePrice() {
    var time_start = new Date();
    var time_end = new Date();
    var value_start = this.slot.start_time.split(':');
    var value_end = this.slot.end_time.split(':');

    time_start.setHours(value_start[0], value_start[1]);
    time_end.setHours(value_end[0], value_end[1]);

    var diff = (time_start.getTime() - time_end.getTime()) / 1000;
    diff /= 60 * 60;
    const price = Math.abs(diff) * this.slot.cours.price;

    return price.toFixed(2);
  }

  pay() {
    const diag = this.dialog.open(PayDialogComponent, {
      width: '600px',
      data: { slot: this.slot, price: this.calculatePrice() },
      autoFocus: false,
      disableClose: true,
    });

    diag.componentInstance.reload.subscribe(() => {
      this.reload.emit();
    });
  }

  downloadInvoice() {
    console.log('download invoice');
  }

  isOlder() {
    const today = new Date(new Date().setHours(0, 0, 0, 0));

    return today.getTime() > new Date(this.slot.date).getTime();
  }

  isToday() {
    const today = new Date();
    const date = new Date(this.slot.date);

    return (
      date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    );
  }

  toVisio() {
    this.router.navigate(['/visio', this.slot._id]);
  }

  toLesson() {
    this.router.navigate(['/lesson', this.slot.cours._id]);
  }
}
