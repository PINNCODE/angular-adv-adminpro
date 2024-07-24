import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {

  public grafica1 = {
    title: 'Ventas companias',
    labels: ['Telcel', 'AT&T'],
    data: [
      { data: [ 100, 200 ], backgroundColor: ['#6857E6', '#009FEE'] },
    ]
  }

  public grafica2 = {
    title: 'Ventas',
    labels: ['Recargas', 'Celulares', 'Accesorios'],
    data: [
      { data: [ 100, 200, 400 ], backgroundColor: ['#6857E6', '#009FEE', '#6DB516'] },
    ]
  }

  public grafica3 = {
    title: 'Ventas',
    labels: ['Telcel', 'AT&T'],
    data: [
      { data: [ 100, 200 ], backgroundColor: ['#6857E6', '#009FEE'] },
    ]
  }

  public grafica4 = {
    title: 'Ventas',
    labels: ['Telcel', 'AT&T'],
    data: [
      { data: [ 100, 200 ], backgroundColor: ['#6857E6', '#009FEE'] },
    ]
  }

}
