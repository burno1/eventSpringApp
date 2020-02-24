import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Convidado } from '../Model/Convidado';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-convidados',
  templateUrl: './convidados.component.html',
  styleUrls: ['./convidados.component.css']
})
export class ConvidadosComponent implements OnInit {
  convidados$: Convidado[]
  convidado: Convidado;
  nome;
  email;
  dataNasc;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }

  
  montarConvidado(){
    this.convidado = {
      id: null,
      nome: "",
      dataNasc: new Date(),
      email: "",
      dependentes: []
    }
  }

  listar(){
    this.data.getConvidados().subscribe(data => {
      this.convidados$ = data;
      this.montarConvidado();
    });
  }

  buscar(id: number){
    this.data.getConvidado(id).subscribe(data => {
      this.convidado = data;
      
    })

  }
  

  salvar(){
    if (this.convidado.id != null){
      this.data.editarConvidado(this.convidado).subscribe(data=>{
        console.log(data);
        this.listar();
      })
    } else { 
      this.data.salvarConvidado(this.convidado).subscribe(data => {
        console.log(data);
        this.listar();
        
      });
    }

  }

  irDependentes(id: number){
    this.router.navigate(["/convidado/"+ id]);
  }

  editar(id: number){
    this.buscar(id);
  }

  deletar(id: number){
    this.data.excluirConvidado(id).subscribe(data => {
      this.listar();
    })
  }


}
