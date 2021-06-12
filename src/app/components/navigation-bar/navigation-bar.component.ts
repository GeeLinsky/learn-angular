import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  navBarLinks = [
    { text: 'Home', path: '' },
    { text: 'What is Angular', path: 'what-is-angular' },
    { text: 'Component', path: 'component' }
  ];
}
