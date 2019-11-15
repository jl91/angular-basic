import {NgModule} from '@angular/core';

import {
  HomeComponent
} from './home.component';

import {UsersComponent} from './users/users.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: HomeComponent,
    //   }
    // ])
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    UsersComponent
  ],
  providers: [],
})
export class HomeModule {
}
