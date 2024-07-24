import { Component, Input } from '@angular/core';
import { ChartConfiguration, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = ['Default 1', 'Default 2'];
  
  @Input('data') doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 100, 100 ], backgroundColor: ['#6857E6', '#009FEE'] },
  ];

}
