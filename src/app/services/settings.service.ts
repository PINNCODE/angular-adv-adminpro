import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    // set theme
    const url = localStorage.getItem('theme') || 'assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }

  public changeTheme(theme: string): void {
    const url = `assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

  checkCurrentTheme() : void {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    links.forEach( element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      if ( btnThemeUrl === currentTheme ) {
        element.classList.add('working');
      }
    });

  }
}
