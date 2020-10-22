import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { User } from '../../models/user';
import { USERS } from '../../mocks/user.mock';
// import { moment } ...

// OnInit => Lifecyclehooks - https://angular.io/guide/lifecycle-hooks
@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  @Output()
  myCustomEvent = new EventEmitter<string>();
  @Input()
  globalTitle: string;
  title: string;
  date = new Date(); // type inference
  disabled = true;
  imgLink = 'https://picsum.photos/200/300';
  logoColor = '#000';
  users: User[];

  // used for DI (the component can receive objects from Angular)
  constructor() { }

  // initialization logic
  ngOnInit(): void {
    this.title = 'Initialization done';
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = USERS;
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  triggerEvent(): void {
    this.myCustomEvent.emit('Sample string value');
  }

}
