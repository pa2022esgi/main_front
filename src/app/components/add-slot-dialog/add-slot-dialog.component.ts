import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat/chat.service';
import { SlotService } from 'src/app/services/slot/slot.service';

@Component({
  selector: 'app-add-slot-dialog',
  templateUrl: './add-slot-dialog.component.html',
  styleUrls: ['./add-slot-dialog.component.css'],
})
export class AddSlotDialogComponent implements OnInit {
  today = new Date();
  users: any[] = [];
  error: string | null = null;
  slot: any = {};
  @Output() reload = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<AddSlotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private chatServ: ChatService,
    private auth: AuthService,
    private slotServ: SlotService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.slot.online = false;
  }

  getUsers() {
    this.chatServ.getChats().subscribe((res: any) => {
      res.forEach((chat: any) => {
        this.users.push(
          chat.users.find((user: any) => user._id !== this.auth.user?.id)
        );
      });
    });
  }

  close() {
    this.dialogRef.close();
  }

  calculatePrice() {
    if (this.slot.start_time && this.slot.end_time) {
      var time_start = new Date();
      var time_end = new Date();
      var value_start = this.slot.start_time.split(':');
      var value_end = this.slot.end_time.split(':');

      time_start.setHours(value_start[0], value_start[1]);
      time_end.setHours(value_end[0], value_end[1]);

      var diff = (time_start.getTime() - time_end.getTime()) / 1000;
      diff /= 60 * 60;
      const price = Math.abs(diff) * this.data.price;

      return price.toFixed(2);
    } else {
      return 0;
    }
  }

  create() {
    this.error = null;

    if (!this.slot.date) {
      this.error = 'Veuillez indiquer une date';
    }

    if (!this.slot.user) {
      this.error = 'Veuillez sélectionner un élève';
    }

    if (!this.slot.start_time) {
      this.error = 'Veuillez indiquer une heure de début';
    }

    if (!this.slot.end_time) {
      this.error = 'Veuillez indiquer une heure de fin';
    }

    if (!this.error) {
      this.slotServ.createSlot(this.slot, this.data._id).subscribe((res: any) => {
        this.reload.emit();
        this.dialogRef.close();
      });
    }
  }
}
