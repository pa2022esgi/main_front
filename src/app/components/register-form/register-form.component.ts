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

  email: string | undefined;
  password: string | undefined;
  confirmpassword: string | undefined;
  role: UserRole | undefined;

  constructor(private authService : AuthService) {}

  ngOnInit(): void {}

  register(): void {
        this.user = {'email': this.email, 'password': this.password, 'type': this.role};
        console.log(this.user);
        this.authService.register(this.user).subscribe(
          result => {console.log('result is ', result);},
          error => {console.log('error is ', error);}
        )
  }

}
