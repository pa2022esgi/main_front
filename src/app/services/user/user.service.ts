import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/users';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(URL + '/');
  }

  validateUser(id: string, validated: boolean) {
    return this.http.put(URL + '/' + id, {
      validated,
    });
  }
}
