import {Injectable} from "@angular/core";
import {WebRequestService} from "../web-request/web-request.service";

@Injectable({
  providedIn: "root"
})
export class UserService{
  constructor(private webReqService: WebRequestService) {}

  createUser(firstname:string,type:string,login:string,password:string,address:string,phone:number){
    return this.webReqService.post("users",{ firstname,type,login,password,address,phone });
  }

  getAllUsers(){
    return this.webReqService.get("users");
  }

  deleteUserByID(id:string){
    return this.webReqService.delete("users/"+id);
  }
}
