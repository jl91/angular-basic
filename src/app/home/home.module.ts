import {NgModule} from '@angular/core';

import {
  HomeComponent
} from './home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
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
    HomeComponent
  ],
  providers: [],
})
export class HomeModule {
}
