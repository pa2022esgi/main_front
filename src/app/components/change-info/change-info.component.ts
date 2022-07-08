import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfoService } from 'src/app/services/personal-info/personal-info.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
  error: string | null = null;
  @Input() user: any | null;
  today = new Date();

  loading: boolean = false;

  constructor(private service: PersonalInfoService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {}
  
  modifyInfo() {
    this.error = null;
    if (!this.user.email || !this.user.email.match(/^\s*[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}\s*$/)) {
      this.error = 'Email valide requis';
    }
    if (!this.user.firstname) {
      this.error = 'Prénom requis';
    }
    if (!this.user.lastname) {
      this.error = 'Nom requis';
    }
    if (!this.user.phone || !this.user.phone.match(/^((\+)33|0|0033)[1-9](\d{2}){4}$/g)) {
      this.error = 'Téléphone valide requis';
    }
    if (!this.user.address) {
      this.error = 'Addresse requise';
    }
    if (!this.user.birthdate) {
      this.error = 'Date de naissance requise';
    }

    if (!this.error) {
      this.service.updatePersonalInfo({
        "email": this.user.email,
        "firstname": this.user.firstname,
        "lastname": this.user.lastname,
        "phone": this.user.phone,
        "address": this.user.address,
        "birthdate": this.user.birthdate
      }).subscribe({
        next: (res: any) => {
          this.snackbar.open("Informations enregistrées", "", {
            duration: 2000,
            panelClass: ['snackbar']
          });
        },
        error: (err: any) => {
          this.error = err.error.msg;
        }
      })
    }
  }
}
