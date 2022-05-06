import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UserComponent,
    UserIdComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }