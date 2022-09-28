import { Component, OnInit,Input } from '@angular/core';
import { Repas } from 'src/app/models/repas';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() listeRepas: Repas[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  delete(id:number){
    this.listeRepas.forEach((value,index,array)=>{
      if(id==value.getID()){
        this.listeRepas.splice(index,1);
      }
    });
  }


}
