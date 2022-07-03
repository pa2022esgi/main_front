import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
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
  
  constructor(private http: HttpClient) { }

  get(user: User): Observable<any>{
    return this.http.post(URL + 'login',{
      "login" : user.email,
      "password" : user.password
    }, httpOptions);
  }


  register(user: User): Observable<any>{
    console.log(user);
    return this.http.post(URL + 'register',{
      "login": user.email,
      "password": user.password,
      "role": user.role
    }, httpOptions);
  }

}
