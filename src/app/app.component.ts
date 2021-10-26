import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MidTerm';
  url = ''
  constructor(private location: Location) {

    switch (this.location.path()) {
      case '/profile':
        this.url = 'Profile';
        break;
      case '/gallery':
        this.url = 'Gallery';
        break;
      case '/contact':
        this.url = 'Contact';
        break;
      default:
        this.url = 'Select from menu'
    }
  }


}
