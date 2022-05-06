import { UsersComponent } from './users/users.component';
import { UserIdComponent } from './user-id/user-id.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '',
    component: UserComponent,
    children: [{
      path: 'users',
      component: UsersComponent
    },
      {
      path: ':id',
      component: UserIdComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
