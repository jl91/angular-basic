import {NgModule} from '@angular/core';
import {PagesRountingModule} from './pages-rounting.module';
import {PagesComponent} from './pages.component';

@NgModule({
  imports: [
    PagesRountingModule
  ],
  exports: [
    PagesRountingModule,
    PagesComponent
  ],
  declarations: [
    PagesComponent
  ],
  providers: [],
})
export class PagesModule {
}
