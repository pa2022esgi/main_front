import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

const URL= "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getPersonalInfo() {
    return this.http.get(URL + '/me');
  }

  updatePersonalInfo(user: any) {
    return this.http.put(URL + '/' + this.auth.user?.id, { 
      "firstname": user.firstname,
      "lastname": user.lastname,
      "login": user.email,
      "address": user.address,
      "phone": user.phone,
      "birthdate": user.birthdate
    });
  }
  
  updatePassword(password: string) {
    return this.http.put(URL + '/' + this.auth.user?.id, { 
      "password": password
    });
  }
}
