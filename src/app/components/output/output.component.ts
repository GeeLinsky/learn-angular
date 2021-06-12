import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  childOutput: string = 'child output';
  @Output()
  childOutputEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    // this.childOutputEmitter.emit(this.childOutput);
  }

  onChildOutputChange(childOutput: string): void {
    this.childOutput = childOutput;
    this.childOutputEmitter.emit(childOutput);
  }
}
