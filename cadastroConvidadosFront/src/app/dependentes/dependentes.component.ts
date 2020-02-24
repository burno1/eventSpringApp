import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Convidado } from '../Model/Convidado';
import { ActivatedRoute } from '@angular/router';
import { Dependente } from '../Model/Dependente';

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.component.html',
  styleUrls: ['./dependentes.component.css']
})
export class DependentesComponent implements OnInit {
  convidado$: Convidado;
  dependentes: Dependente[];
  dependenteInput: Dependente;
  


  constructor(private route: ActivatedRoute, private data: DataService) {
    this.montarDependente();
    this.route.params.subscribe(params => {
      this.data.getConvidado(params.id).subscribe(data=>{
        this.convidado$ = data;
        console.log("ihu" + this.convidado$);
      });
    });
  }
  
  ngOnInit() {}

  listar(){
    this.data.getConvidado(this.convidado$.id).subscribe(data=>{
      this.convidado$ = data;
    });
  }


  montarDependente(){
    this.dependenteInput = {
      id: null,
      nome: "",
      dataNasc: new Date(),
      email: "",
      tipoDependente: 0,
      convidado_id: null
    }
  }

  salvar(){
     
    if(this.dependenteInput.id == null){
      this.convidado$.dependentes.push(this.dependenteInput);
    } else {
          this.convidado$.dependentes.forEach((elemento,index)=>{
            if(elemento.id==this.dependenteInput.id){
              this.convidado$.dependentes[index] = this.dependenteInput;
            }
        })
      }


      this.data.editarConvidado(this.convidado$).subscribe(data=>{
        console.log(data + "ihudasdas");
        this.listar();
      })
     
     
  }

  editar (id: number){
    this.data.getDependente(id).subscribe(data=>{
      this.dependenteInput = data;
    })
  }

  excluir(id: number){
    console.log("exclido" + id);
    this.convidado$.dependentes.forEach((elemento,index)=>{
      if(elemento.id==id){
        this.convidado$.dependentes[index] = null;
      }
    })

    this.data.editarConvidado(this.convidado$).subscribe(data=>{
      console.log(data + "ihudasdas");
      this.listar();
    })
  }
}
