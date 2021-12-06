import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    {
      name: 'João',
      status: 1
    },
    {
      name: 'Carlos',
      status: 2
    },
    {
      name: 'Maria',
      status: 3
    },
  ];
}
