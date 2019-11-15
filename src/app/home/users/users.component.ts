import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {

  @Output()
  public myCustomEvent: EventEmitter<string> = new EventEmitter<string>();

  private counter = 0;

  constructor() {
  }

  onClick(e: MouseEvent): void {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    this.myCustomEvent.emit(`User ${this.counter}`);
    ++this.counter;
  }

  ngOnInit() {
  }
}
