import { Component} from '@angular/core';

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
      name: 'Maria',
      status: 2
    },
    {
      name: 'Lucas',
      status: 3
    },
  ];
}
