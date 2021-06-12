import { Component, ViewChild } from '@angular/core';

import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  parentInput: string = "parent input";
  parentOutput!: string;
  @ViewChild('viewChildComponent')
  viewChildComponent!: ViewChildComponent;

  onChangeFEDChairmanClick(): void {
    this.viewChildComponent.nextFEDChairman();
  }
}
