import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "http://localhost:3000/auth/login";

  user: User | undefined;

  constructor(private http: HttpClient) { }

  get(user: User): Observable<any>{
    return this.http.post(this.URL,{
      "login": user.email,
      "password": user.password
    });
  }

}
