import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {AddUsersButtonComponent} from './add-users-button/add-users-button.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  exports: [
    UsersRoutingModule,
    UsersComponent,
  ],
  declarations: [
    UsersComponent,
    AddUsersButtonComponent
  ],
  providers: [],
})
export class UsersModule {
}
