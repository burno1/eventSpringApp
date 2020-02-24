import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Convidado } from '../Model/Convidado';
import { ActivatedRoute, Router } from '@angular/router';
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
  msg: string;


  constructor(private route: ActivatedRoute, private data: DataService,private router: Router) {
    this.montarDependente();
    this.route.params.subscribe(params => {
      this.data.getConvidado(params.id).subscribe(data=>{
        this.convidado$ = data;
        
      });
    });
  }
  
  ngOnInit() {}

  listar(){
    this.data.getConvidado(this.convidado$.id).subscribe(data=>{
      this.convidado$ = data;
    });
  }

  voltarConvidado(){
    this.router.navigate([""]);
  }


  montarDependente(){
    this.dependenteInput = {
      id: null,
      nome: "",
      dataNasc: null,
      email: "",
      tipoDependente: 0,
      convidado_id: null
    }
  }

  mostraRelacao(tipo: number){
    let tipos = ["Filho(a)","Cônjuge","Secretário(a)"]
    return tipos[tipo-1];
  }

  salvar(){
    if(this.validaDependentes(this.convidado$.dependentes)){
      if(this.dependenteInput.id == null){
        this.convidado$.dependentes.push(this.dependenteInput);
      } else {
            this.convidado$.dependentes.forEach((elemento,index)=>{
              if(elemento.id==this.dependenteInput.id){
                this.convidado$.dependentes[index] = this.dependenteInput;
              }
          })
        }
    }  


      this.data.editarConvidado(this.convidado$).subscribe(data=>{
        console.log(data + "ihudasdas");
        this.listar();
      })
     
     
  }

  validaDependentes(data: Dependente[]){
    if(data.length==3){
      this.msg = "O Convidado já possui o máximo de dependentes";
      return false;
    }
    this.msg="";
    return true;
  }

  editar (id: number){
    this.data.getDependente(id).subscribe(data=>{
      this.dependenteInput = data;

      this.dependenteInput.dataNasc = this.converteData(this.dependenteInput.dataNasc) ;
    })
  }

  converteData (data: Date):any {
    let dataAux = new Date(data)
    let ano = dataAux.getFullYear();
    let mes = dataAux.getMonth();
    let dia = dataAux.getDate();
    let novaData = new Date(ano,mes,dia);

    
    return novaData;
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
}
