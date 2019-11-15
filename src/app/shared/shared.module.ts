import {NgModule} from '@angular/core';
import {DatagridModule} from './components/datagrid/datagrid.module';

@NgModule({
  imports: [
    DatagridModule
  ],
  exports: [
    DatagridModule
  ],
  providers: [],
})
export class SharedModule {
}
