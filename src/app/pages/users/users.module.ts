import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent
  ],
  declarations: [
    UsersComponent
  ],
  providers: [],
})
export class UsersModule {
}
