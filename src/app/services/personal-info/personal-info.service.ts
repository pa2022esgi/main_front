import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL= "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient) { }

  getPersonalInfo() {
    return this.http.get(URL + '/me');
  }
}
