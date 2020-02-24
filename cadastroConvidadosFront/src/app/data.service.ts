import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Convidado } from './Model/Convidado';

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getConvidados(): any {
    return this.http.get("http://localhost:8080/convidados");
  }

  getConvidado(id: number): any{
    return this.http.get("http://localhost:8080/convidados/" + id);
  }

  salvarConvidado(convidado: Convidado): any{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   return this.http.post("http://localhost:8080/convidados/", convidado );
  }

  excluirConvidado(id: number): any {
    return this.http.delete("http://localhost:8080/convidados/" + id);
  }

  editarConvidado(convidado): any{
    console.log(convidado);
    return this.http.put("http://localhost:8080/convidados/" + convidado.id, convidado );
  }

  salvarDependente(convidado){
    return this.http.post("http://localhost:8080/convidados/", convidado );
  }

  getDependente(id: number): any{
    return this.http.get("http://localhost:8080/dependentes/" + id);
  }

}