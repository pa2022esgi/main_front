import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) {
  }

  users_list:{name:string,login:string, type:string, address:string, phone:number, id:string}[] = [];

  headers:string[] = ["name","login","type","address","phone","actions"];

  ngOnInit(){
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((users:any) =>{
      this.users_list = users;
      console.log(users);
    });
  }

  deleteUser(id:string){
    this.userService.deleteUserByID(id).subscribe(() => {
      this.getAllUsers();
    });
  }

}
