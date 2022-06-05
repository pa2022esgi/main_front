import { Component, OnInit } from '@angular/core';
import {UserRole} from "../../services/auth/user";
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
    if(this.invalidEmail()){
      console.log('email error!');
    }else {
      if(this.invalidPassword()){
        console.log('mot de pass error!')
      }else {
        this.user = {'email': this.email, 'password': this.password, 'role': this.role};
        this.authService.register(this.user).subscribe(
          result => {console.log('result is ', result);},
          error => {console.log('error is ', error);}
        )
      }
    }
  }

  invalidEmail() {
    if(this.invalidSubmitEmail() || this.invalidFormat()){
      return true;
    }else {
      return false;
    }
  }

  invalidSubmitEmail(): boolean {
    if(this.email === undefined || this.email === ''){
      return true;
    }else {
      return false;
    }
  }

  invalidFormat(): boolean {
    const emailRegex = /^\s*[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}\s*$/;
    if(emailRegex.test(<string>this.email)){
      return false;
    }else {
      console.log('invalid email');
      return true;
    }
  }

  invalidPassword(): boolean {
    if(this.invalidSubmitPassword() || this.invalidFormatPassword()){
      return true;
    }else {
      return false;
    }
  }

  invalidSubmitPassword(): boolean {
    if(this.password === undefined || this.password ===''){
      return true;
    }else {
      return false;
    }
  }

  invalidFormatPassword(): boolean {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
    if(passRegex.test(<string>this.password)){
      return false;
    }else {
      console.log('invalid password')
      return true;
    }
  }

  invalidConfirmPassword(): boolean{
    if(this.confirmpassword === undefined || this.confirmpassword=== ''){
      return true;
    }else {
      return false;
    }
  }

  differentPassword(): boolean {
    if(this.password !== this.confirmpassword){
      return true;
    }else {
      return false;
    }
  }

  invalidTwoPassword(): boolean{
    if(this.invalidPassword() || this.invalidConfirmPassword() || this.differentPassword()){
      return true;
    }else {
      return false;
    }
  }
}
