import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SlotService } from 'src/app/services/slot/slot.service';

@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.css'],
})
export class PayDialogComponent implements OnInit {
  @Output() reload = new EventEmitter<void>();
  paiement: any = {}
  today = new Date();
  error: string | null = null;

  constructor(public dialogRef: MatDialogRef<PayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private slotServ: SlotService) { }

  ngOnInit(): void {
  }

  pay() {
    this.error = null;

    if (!this.paiement.date) {
      this.error = 'Veuillez renseigner une date de validité';
    }

    if (!this.paiement.crypto) {
      this.error = 'Veuillez renseigner le cryptogramme visuel';
    }

    if (!this.paiement.card) {
      this.error = 'Veuillez renseigner le numéro de carte';
    }

    if (!this.paiement.name) {
      this.error = 'Veuillez renseigner un nom';
    }
    
    if (!this.error) {
      this.slotServ.paySlot(this.data.slot._id).subscribe(() => {
        this.reload.emit();
        this.dialogRef.close();
      });
    }
  }

  handleDate($event: any, dateDialog: any) {
    this.paiement.date = $event;
    dateDialog.close();
  }

  close() {
    this.dialogRef.close();
  }
}
