import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-variable',
  templateUrl: './local-variable.component.html',
  styleUrls: ['./local-variable.component.scss']
})
export class LocalVariableComponent implements OnInit {
  randomNumber!: number;

  ngOnInit(): void {
    this.generateRandomNumber();
  }

  generateRandomNumber(): void {
    this.randomNumber = Math.floor((Math.random() * Number.MAX_SAFE_INTEGER) + 1);
  }
}
