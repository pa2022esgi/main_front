import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";

const URL= "http://localhost:3000/users";
@Injectable({
  providedIn: "root"
})
export class UserService{
  constructor(private http: HttpClient) {}

  createUser(firstname:string, role:string, email:string, password:string, address:string, phone:number){
    return this.http.post(URL + '/', { firstname, role, email, password, address, phone });
  }

  getAllUsers(){
    return this.http.get(URL + '/');
  }

  deleteUserByID(id:string){
    return this.http.delete(URL + '/' + id);
  }

  validateUser(id:string, validated: boolean){
    return this.http.put(URL + '/' + id, { 
      validated
    });
  }
}
