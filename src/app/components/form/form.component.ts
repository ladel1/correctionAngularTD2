import { Component, OnInit, Input } from '@angular/core';
import { Repas } from 'src/app/models/repas';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nom:string="";
  date:string="";
  heure:string="";
  aliments:string="";
  cpt:number=0;

  @Input() listeRepas: Repas[] = [];

  constructor() { }

  ajouterRepas(){
      console.log(this.nom,this.date,this.heure,this.aliments);
      
      var repas = new Repas(this.cpt,this.nom,this.date,this.heure,this.aliments);
      this.listeRepas.push(repas);
      console.log("Repas ajouté!");
      console.log(this.listeRepas);
      this.cpt++;
  }

  ngOnInit(): void {
  }

}
