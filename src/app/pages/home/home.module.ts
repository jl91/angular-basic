import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    RouterModule,
    HomeComponent
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [],
})
export class HomeModule {
}
