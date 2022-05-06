import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      if (params['id']) {
        this.getUser(params['id']);
      }
    });

  }

  getUser(id: string) {
    this.user$ = this.user.getUser(id);
  }
}
