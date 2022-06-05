import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_LOGIN= "http://localhost:3000/auth/login";
  URL_REGISTER= "http://localhost:3000/auth/register"

  user: User | undefined;

  constructor(private http: HttpClient) { }

  get(user: User): Observable<any>{
    return this.http.post(this.URL_LOGIN,{
      "login": user.email,
      "password": user.password
    });
  }

  register(user: User){
    return this.http.post(this.URL_REGISTER,{
      "login": user.email,
      "password": user.password,
      "role": user.role
    });
  }

}
