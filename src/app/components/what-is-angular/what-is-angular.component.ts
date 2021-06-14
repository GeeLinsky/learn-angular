import { Component } from '@angular/core';

@Component({
  selector: 'app-what-is-angular',
  templateUrl: './what-is-angular.component.html',
  styleUrls: ['./what-is-angular.component.scss']
})
export class WhatIsAngularComponent {
  fileStructures: { text: string, url: string }[] = [
    { text: 'tsconfig.json',  url: 'https://www.typescriptlang.org/docs/handbook/tsconfig-json.html' },
    { text: 'package.json', url: 'https://nodejs.dev/learn/the-package-json-guide' },
    { text: 'package-lock.json', url: 'https://nodejs.dev/learn/the-package-lock-json-file' }
  ]
}
