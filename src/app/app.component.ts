import { Component } from '@angular/core';
import { Repas } from './models/repas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listeRepas: Repas[] = [];


}
