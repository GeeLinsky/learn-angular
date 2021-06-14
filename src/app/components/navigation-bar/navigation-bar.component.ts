import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  navBarLinks: { text: string, path: string }[] = [
    { text: 'Home', path: '' },
    { text: 'What is Angular', path: 'what-is-angular' },
    { text: 'Template', path: 'template' },
    { text: 'Component', path: 'component' }
  ];
}
