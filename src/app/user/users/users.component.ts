import { UserService } from './../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.users$ = this.user.currentUsers;
    this.getUsers();
  }

  getUsers() {
    this.user.getUsers();
  }

}
