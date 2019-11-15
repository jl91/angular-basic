import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  public oddUsers: Array<User> = new Array<User>();
  public evenUsers: Array<User> = new Array<User>();

  constructor() {
  }

  onMyCustomEventDispatch(user: User): void {

    if (user.id % 2 === 0) {
      this.oddUsers.push(user);
      return;
    }

    this.evenUsers.push(user);
  }

  ngOnInit() {
  }
}
