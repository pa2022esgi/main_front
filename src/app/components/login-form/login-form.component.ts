import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AuthService]
})
export class LoginFormComponent implements OnInit {
  public user: User;

  constructor(private authService : AuthService, private router : Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

    // TODO call API pour login et register


  get() {
    if(this.user?.email && this.user?.password) {
      this.authService.get(this.user).subscribe(result => {
        this.authService.user={role : 0};
        this.router.navigate(['']);
        console.log('result is ', result);
      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('enter user email and password');
    }
  }
}
