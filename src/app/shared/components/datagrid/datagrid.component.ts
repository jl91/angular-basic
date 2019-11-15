import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: 'datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit, AfterViewInit {

  @Input()
  public caption = '';

  @Input()
  public collection: Array<any>;

  private headers: Array<string>;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.headers = Object.keys(this.collection[0]);
  }

}
