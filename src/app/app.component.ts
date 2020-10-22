import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Welcome to my app';
  my_title = 'test';

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  handleMyCustomEvent(msg: string): void {
    console.log('Event received', msg);
    this.title += '(event received) ';
  }

}
