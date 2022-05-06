import { Address } from './../../../interfaces/user/address';
import { UserService } from './../../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  user$: Observable<User>;
  foo: Address;

  constructor(
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.user.currentUser;
    this.foo = this.user.currentUser.getValue().address;
  }

}
