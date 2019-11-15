import {Component, OnInit} from '@angular/core';
import {User} from './model/user.model';
import {of} from 'rxjs/observable/of';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public oddUsers: Array<User> = new Array<User>();
  public evenUsers: Array<User> = new Array<User>();

  constructor() {
  }

  ngOnInit() {
  }

  onMyCustomEventDispatch(user: User): void {

    if (user.id % 2 === 0) {
      this.oddUsers.push(user);
      return;
    }

    this.evenUsers.push(user);
  }

}
