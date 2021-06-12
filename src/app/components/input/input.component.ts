import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnChanges {

  @Input()
  childInput!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
