import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeModule} from './pages/home/home.module';
import {UsersModule} from './pages/users/users.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'users',
    loadChildren: './pages/users/users.module#UsersModule'
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
