import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../services/auth/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  constructor(private authService : AuthService) {}

  ngOnInit(): void {
    console.log("authService : ",this.authService.user);
  }

  login(){
    // TODO call API pour login et register
    this.authService.user = new User();
  }
}
