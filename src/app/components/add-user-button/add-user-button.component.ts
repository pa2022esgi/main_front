import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user-service.service";

@Component({
  selector: 'app-add-user-button',
  templateUrl: './add-user-button.component.html',
  styleUrls: ['./add-user-button.component.css']
})
export class AddUserButtonComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  createNewUser(){
    this.userService.createUser("Test","Test","Test","Test","Test",4567).subscribe((response:any) =>{
      console.log(response);
    });
  }

}
