import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.component.html',
  styleUrls: ['./dependentes.component.css']
})
export class DependentesComponent implements OnInit {

  constructor(private data: DataService) {}
  ngOnInit() {
    
  }

  pesquisar() {
    console.log("data");
    this.data.getCidade().subscribe();
  }

  salvar(){
    console.log("Salvei!");
  }

}
