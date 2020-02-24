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

  constructor(private data: DataService, private router: Router) {
    this.montarConvidado();
  }

  ngOnInit(): void {
    this.listar();
  }

  
  montarConvidado(){
    this.convidado = {
      id: null,
      nome: "",
      dataNasc: null,
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
      this.convidado.dataNasc=this.converteData(this.convidado.dataNasc);
      
    })
    
  }
  
  editar(id: number){
    this.buscar(id);
  }

  converteData (data: Date):any {
    let dataAux = new Date(data)
    let ano = dataAux.getFullYear();
    let mes = dataAux.getMonth();
    let dia = dataAux.getDate();
    let novaData = new Date(ano,mes,dia);

    
    return novaData;
  }

  mostraData(data: Date){
    let dataDep = new Date(data);
    let dataString;
    let dia ;
    let mes;
    let ano;

    
    dia = dataDep.getDate();
    mes = dataDep.getMonth() + 1;
    ano = dataDep.getFullYear();

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    
    dataString = dia + "/" + mes + "/" + ano;

    return dataString;
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


  deletar(id: number){
    this.data.excluirConvidado(id).subscribe(data => {
      this.listar();
    })
  }


}
