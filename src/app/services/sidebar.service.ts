import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        {
          title: 'Main',
          url: '/'
        },
        {
          title: 'ProgressBar',
          url: 'progress'
        },
        {
          title: 'Graficas',
          url: 'grafica1'
        },
        {
          title: 'Promesas',
          url: 'promesas'
        },
        {
          title: 'Rjxs',
          url: 'rxjs'
        },
      ]
    }
  ];

  constructor() { }
}
