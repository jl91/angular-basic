import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {

  @Output()
  public myCustomEvent: EventEmitter<User> = new EventEmitter<User>();

  private counter = 0;

  constructor() {
  }

  onClick(e: MouseEvent): void {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    const user = new User();
    user.id = this.counter;
    user.name = `User ${this.counter}`;
    user.email = `user${user.id}@gmail.com`;

    this.myCustomEvent.emit(user);
    ++this.counter;
  }

  ngOnInit() {
  }
}
