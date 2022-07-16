import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import {MatDialog} from "@angular/material/dialog";
import { UserInfoDialogComponent } from '../user-info-dialog/user-info-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog) { }

  @Input() users_list: Array<any> = [];

  headers: string[] = ['name', 'email', 'role', 'validation', 'actions'];

  ngOnInit() {}

  handleValidate(id: string, $event: boolean) {
    this.userService.validateUser(id, $event).subscribe();
  }

  dialogInfo(element: any) {
    this.dialog.open(UserInfoDialogComponent, {
      width: '600px',
      data: {user: element},
      autoFocus: false,
      disableClose: true, 
    });
  }
}
