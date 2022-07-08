import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() users_list: Array<any> = [];
  @Output() reload = new EventEmitter<void>();

  headers: string[] = ['name', 'email', 'role', 'validation', 'actions'];

  ngOnInit() {

  }
  handleValidate(id: string, $event: boolean) {
    this.userService.validateUser(id, $event).subscribe();
  }

  deleteUser(id: string) {
    this.userService.deleteUserByID(id).subscribe(() => {
      this.reload.emit();
    });
  }
}
