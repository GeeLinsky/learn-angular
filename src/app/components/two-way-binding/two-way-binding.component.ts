import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  @Input()
  childCount!: number;
  @Output()
  childCountChange = new EventEmitter<number>();

  inc(): void {
    this.childCountChange.emit(this.childCount + 1);
  }

  dec(): void {
    this.childCountChange.emit(this.childCount - 1);
  }
}
