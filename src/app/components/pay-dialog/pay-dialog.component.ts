import { Component, EventEmitter, Inject, OnInit, Output, NgZone } from '@angular/core';
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

  constructor(public dialogRef: MatDialogRef<PayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private slotServ: SlotService,private ngZone: NgZone) { }

  ngOnInit(): void {}

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
      (<any>window).Stripe.card.createToken({
        number: this.paiement.card,
        exp_month: this.paiement.date.getMonth() + 1,
        exp_year: this.paiement.date.getFullYear(),
        cvc: this.paiement.crypto,
      }, (status: any, response: any) => {
        if (response.error) {
          this.error = 'Impossible de procéder au paiement veuillez vérifier vos informations';
        } else {
          this.payCall(response.id);
        }
      });
    }
  }

  payCall(token : string) {
    this.slotServ.paySlot(this.data.slot._id, token).subscribe(() => {
      this.ngZone.run(() => {
        this.reload.emit();
        this.dialogRef.close();
      });
    });
  }

  handleDate($event: any, dateDialog: any) {
    this.paiement.date = $event;
    dateDialog.close();
  }

  close() {
    this.dialogRef.close();
  }
}
