import {Injectable} from "@angular/core";
import {WebRequestService} from "../web-request/web-request.service";

@Injectable({
  providedIn: "root"
})
export class UserService{
  constructor(private webReqService: WebRequestService) {}

  createUser(firstname:string,role:string,email:string,password:string,address:string,phone:number){
    return this.webReqService.post("users",{ firstname,role,email,password,address,phone });
  }

  getAllUsers(){
    return this.webReqService.get("users");
  }

  deleteUserByID(id:string){
    return this.webReqService.delete("users/"+id);
  }
}
