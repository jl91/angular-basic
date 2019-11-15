import {NgModule} from '@angular/core';

import {
  HomeComponent
} from './home.component';

import {UsersComponent} from './users/users.component';
import {CommonModule} from '@angular/common';
import {DatagridComponent} from '../../shared/components/datagrid/datagrid.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
