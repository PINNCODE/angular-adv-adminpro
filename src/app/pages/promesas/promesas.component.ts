import { Component } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrl: './promesas.component.scss'
})
export class PromesasComponent {

  constructor(){
    this.getUsuarios().then(
      usuarios => console.log(usuarios)
    )
  }

  getUsuarios() {
    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then( body => resolve(body.data));
    })

    return promesa;
  }

}
