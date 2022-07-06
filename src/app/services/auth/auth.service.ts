import { Injectable } from '@angular/core';
import {HttpClient, HttpContext} from "@angular/common/http";
import {User} from "../../models/user.model";
import { Router } from '@angular/router';
import { BYPASS_AUTH } from '../request.interceptor';

const URL= "http://localhost:3000/auth/";
const httpOptions = {
  context: new HttpContext().set(BYPASS_AUTH, true)
};

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  user: User | undefined;
  
  constructor(private router: Router, private http: HttpClient) {
    if (localStorage.getItem("user") !== null) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
  }

  login(user: any){
    return this.http.post(URL + 'login',{
      "email" : user.email,
      "password" : user.password
    }, httpOptions);
  }

  register(user: any){
    return this.http.post(URL + 'register',{
      "email": user.email,
      "password": user.password,
      "role": user.role
    }, httpOptions);
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
