import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  users_list: Array<any> = [];

  headers: string[] = ['name', 'email', 'role', 'validation', 'actions'];

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users: any) => {
      this.users_list = users;
    });
  }
}
