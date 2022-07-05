import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from 'src/app/services/personal-info/personal-info.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
  error: string | null = null;
  email: string | null = null;
  firstname: string | null = null;
  lastname: string | null = null;
  phone: string | null = null;
  address: string | null = null;
  birthdate: Date | null = null;
  today = new Date();

  loading: boolean = false;

  constructor(private service: PersonalInfoService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.service.getPersonalInfo().subscribe({
      next: (res: any) => {
        this.email = res.login;
        this.firstname = res.firstname;
        this.lastname = res.lastname;
        this.phone = res.phone;
        this.address = res.address;
        this.birthdate = res.birthdate;
      }
    });
  }

  modifyInfo() {
    this.error = null;
    if (!this.email || !this.email.match(/^\s*[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}\s*$/)) {
      this.error = 'Email valide requis';
    }
    if (!this.firstname) {
      this.error = 'Prénom requis';
    }
    if (!this.lastname) {
      this.error = 'Nom requis';
    }
    if (!this.phone || !this.phone.match(/^((\+)33|0|0033)[1-9](\d{2}){4}$/g)) {
      this.error = 'Téléphone valide requis';
    }
    if (!this.address) {
      this.error = 'Addresse requise';
    }
    if (!this.birthdate) {
      this.error = 'Date de naissance requise';
    }

    if (!this.error) {
      this.service.updatePersonalInfo({
        "email": this.email,
        "firstname": this.firstname,
        "lastname": this.lastname,
        "phone": this.phone,
        "address": this.address,
        "birthdate": this.birthdate
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
