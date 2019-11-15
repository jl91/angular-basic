import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeModule} from './pages/home/home.module';
import {UsersModule} from './pages/users/users.module';
import {HomeComponent} from './pages/home/home.component';
import {UsersComponent} from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [
    HomeModule,
    UsersModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
