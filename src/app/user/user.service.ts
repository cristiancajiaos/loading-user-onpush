import { CURRENT_USERS } from './../constants/current-users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { CURRENT_USER } from '../constants/current-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(CURRENT_USERS);
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(CURRENT_USER);

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    this.http.get<User[]>(`/users`).subscribe(users => {
      this.currentUsers.next(users);
    })
  }

  getUser(id: string) {
    this.http.get<User>(`/users/${id}`).subscribe(user => {
      this.currentUser.next(user);
    });
  }
}
