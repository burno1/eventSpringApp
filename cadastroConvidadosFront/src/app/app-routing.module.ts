import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvidadosComponent } from './convidados/convidados.component';
import { DependentesComponent } from './dependentes/dependentes.component';


const routes: Routes = [
  {
    path: "",
    component: ConvidadosComponent
  },
  {
    path: "convidado/:id",
    component: DependentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
