import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/users';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: any) {
    return this.http.post(URL + '/', {
      firstname: user.firstname,
      role: user.role,
      email: user.email,
      password: user.password,
      address: user.address,
      phone: user.phone,
    });
  }

  getAllUsers() {
    return this.http.get(URL + '/');
  }

  deleteUserByID(id: string) {
    return this.http.delete(URL + '/' + id);
  }

  validateUser(id: string, validated: boolean) {
    return this.http.put(URL + '/' + id, {
      validated,
    });
  }
}
