import {NgModule} from '@angular/core';
import {DatagridComponent} from './datagrid.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DatagridComponent
  ],
  declarations: [
    DatagridComponent
  ],
  providers: [],
})
export class DatagridModule {
}
