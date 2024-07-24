import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progress: number = 0;
  @Input() btnClass: string = 'btn-primary';

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) : void {
    this.progress = this.progress + value;
    if (this.progress >= 100) {
      this.progress = 100;
    } else if (this.progress <= 0) {
      this.progress = 0;
    }

    this.outputValue.emit(this.progress);
  }

  onChange(newValue: any) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
  }

}
