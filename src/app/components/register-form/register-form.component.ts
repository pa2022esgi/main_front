import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/models/user.model';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {

  user : any = {};

  email: string | null = null;
  password: string | null = null;
  confirmPassword: string | null = null;
  role: UserRole | null = null;
  error: string | null = null;

  constructor(private authService : AuthService) {}

  ngOnInit(): void {}

  register(): void {
    this.error = null;
    if (!this.password || !this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/)) {
      this.error = 'Mot de passe invalide (min 8 caractères, 1 majuscule et 1 chiffre)';
    } else {
      if (this.password !== this.confirmPassword) {
        this.error = 'Les mots de passes ne correspondent pas';
      }
    }

    if (!this.role) {
      this.error = 'Role obligatoire';
    }

    if (!this.email || !this.email.match(/^\s*[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}\s*$/)) {
      this.error = 'Email correcte obligatoire';
    }

    if (!this.error) {
      this.user = {'email': this.email, 'password': this.password, 'role': this.role};
      this.authService.register(this.user).subscribe({
        next: (res) => {console.log('result is ', res);},
        error: (err) => {this.error = "Une erreur est survenue";}
      })
    }
  }

}
