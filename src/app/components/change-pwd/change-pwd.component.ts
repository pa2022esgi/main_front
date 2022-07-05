import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonalInfoService } from 'src/app/services/personal-info/personal-info.service';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  hide1: boolean = true;
  hide2: boolean = true;
  password: string | null = null;
  confirmPassword: string | null = null;
  error: string | null = null

  constructor(private service: PersonalInfoService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {}

  modifyPwd() {
    this.error = null;
    if (!this.password || !this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/)) {
      this.error = 'Mot de passe invalide (min 8 caractères, 1 majuscule et 1 chiffre)';
    } else {
      if (this.password !== this.confirmPassword) {
        this.error = 'Les mots de passes ne correspondent pas';
      }
    }

    if (!this.error) {
      this.service.updatePassword(this.password!).subscribe({
        next: (res: any) => {
          this.snackbar.open("Mot de passe modifié", "", {
            duration: 2000,
            panelClass: ['snackbar']
          });
        }
      })
    }
  }
}
