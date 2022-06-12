import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../user-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) {
  }

  users_list:{name:string,login:string, type:string, address:string, phone:number}[] = [
    {
      name:"Charles",
      login:"ccretois",
      type:"admin",
      address:"Test",
      phone:21641419498,
    },
  ];


  headers:string[] = ["name","login","type","address","phone","actions"];

  ngOnInit(){
    this.userService.getAllUsers().subscribe((users:any) =>{
      this.users_list = users;
    });
  }

}
