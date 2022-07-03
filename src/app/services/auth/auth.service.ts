import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user.model";

const URL= "http://localhost:3000/auth/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  user: User | undefined;
  
  constructor(private http: HttpClient) {
    if (localStorage.getItem("user") !== null) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
  }

  login(user: any){
    return this.http.post(URL + 'login',{
      "login" : user.email,
      "password" : user.password
    }, httpOptions);
  }

  register(user: any){
    return this.http.post(URL + 'register',{
      "login": user.email,
      "password": user.password,
      "type": user.role
    }, httpOptions);
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem('user');
  }
}
