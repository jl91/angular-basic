import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: Array<string> = new Array<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onMyCustomEventDispatch(user: string): void {
    this.users.push(user);
  }

}
