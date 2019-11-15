import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {UsersComponent} from './users.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
