import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-add-user-button',
  templateUrl: './add-user-button.component.html',
  styleUrls: ['./add-user-button.component.css']
})
export class AddUserButtonComponent implements OnInit {

  constructor(private userService:UserService) { }

  @Output() reload = new EventEmitter<void>();

  ngOnInit(): void {
  }

  createNewUser(){
    this.userService.createUser("0","0","test17","0","0",6986498).subscribe((response:any) =>{
      console.log(response);
      this.reload.emit();
    });
  }

}
