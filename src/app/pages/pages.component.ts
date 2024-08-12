import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions() : () => {};

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent {
  constructor(private readonly settingsService: SettingsService){
    customInitFunctions();
  }
}
