import { UserService } from './../../user.service';
import { Company } from './../../../interfaces/user/company';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  user$: Observable<User>;
  foo: Company;

  constructor(
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.user.currentUser;
    this.foo = this.user.currentUser.getValue().company;
  }

}
