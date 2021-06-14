import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  nickname: string = 'GeeLinsky';
  leet: string[] = ['13', '37'];
  bool1: boolean = false;
  builtInPipes: string[] = ['AsyncPipe', 'CurrencyPipe', 'DatePipe', 'DecimalPipe', 'I18nPluralPipe', 'I18nSelectPipe', 'JsonPipe', 'KeyValuePipe', 'LowerCasePipe', 'PercentPipe', 'SlicePipe', 'TitleCasePipe', 'UpperCasePipe'];
  today: Date = new Date;
  num1: number = 75000;
  chevyTahoeImageUrl: string = 'https://i.pinimg.com/originals/bf/b4/f1/bfb4f123f85540ff113a4b879e805d54.jpg';
  isEvilAnakin: boolean = false;
  isDisabled: boolean = false;
  triggerClass: boolean = false;
  triggerColor: boolean = false;
  triggerPX: boolean = false;

  leetJoin(): string {
    return this.leet.join('');
  }

  flipBool1(): void {
    this.bool1 = !this.bool1;
  }

  whichAnakin(): string {
    return this.isEvilAnakin ?
      'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg'
      :
      'https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png';
  }

  whichColor(): string {
    return this.triggerColor ? 'red' : 'green';
  }

  whichPX(): number {
    return this.triggerPX ? 48 : 24;
  }

  consoleLog(log: string): void {
    console.log(log);
  }
}
