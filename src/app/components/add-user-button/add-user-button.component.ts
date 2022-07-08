import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-add-user-button',
  templateUrl: './add-user-button.component.html',
  styleUrls: ['./add-user-button.component.css'],
})
export class AddUserButtonComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Output() reload = new EventEmitter<void>();

  ngOnInit(): void {}

  createNewUser() {
    this.userService
      .createUser({
        "firstname": "test",
        "role": "admin",
        "email": "test@mail.com",
        "password": "Test1234",
        "address": "242 Rue du Faubourg Saint-Antoine, 75012 Paris",
        "phone": "01 56 06 90 41",
      })
      .subscribe((response: any) => {
        this.reload.emit();
      });
  }
}
