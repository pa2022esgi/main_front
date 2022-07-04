import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole } from 'src/app/models/user.model';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {

  email: string | null = null;
  password: string | null = null;
  confirmPassword: string | null = null;
  role: UserRole | null = null;
  error: string | null = null;
  hide1: boolean = true;
  hide2: boolean = true;

  constructor(private authService : AuthService, private router: Router) {}

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
      this.error = 'Email valide obligatoire';
    }

    if (!this.error) {
      this.authService.register({"email": this.email, "role": this.role, "password": this.password}).subscribe({
        next: (res: any) => {
          const user = new User({
            "email": res.user.login,
            "token": res.token,
            "role": res.user.type,
            "id": res.user._id
          });

          this.authService.user = user;
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/profil']);
        },
        error: () => {
          this.error = "Un utilisateur avec cet email existe déjà";
        }
      })
    }
  }

}
