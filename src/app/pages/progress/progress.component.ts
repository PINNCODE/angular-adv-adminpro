import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  value1: number = 10;
  value2: number = 20;
  
  get getValue1() {
    return `${ this.value1 }%`;
  }

  get getValue2() {
    return `${ this.value2 }%`;
  }

  changeValue(lastValue: number, newValue: number) {
    lastValue = newValue;
  }
}
