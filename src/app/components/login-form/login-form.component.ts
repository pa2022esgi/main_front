import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../models/user.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  email: string | null = null;
  password: string | null = null;
  error: string | null = null;
  hide: boolean = true;

  constructor(public authService : AuthService, private router: Router) {}

  ngOnInit(): void {}

  get() {
    this.error = null;

    if (!this.email) {
      this.error = 'Email requis';
    }

    if (!this.password) {
      this.error = 'Mot de passe requis';
    }

    if(!this.error) {
      this.authService.login({"email" : this.email, "password" : this.password}).subscribe({
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
        error : () => {
          this.error = 'Accés refusé';
        }
      });
    }
  }
}
