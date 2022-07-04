import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {}

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

  }
}
