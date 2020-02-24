import { Dependente } from './Dependente';

export class Convidado {
    id: number;
    nome: string;
    email: string;
    dataNasc: Date;
    dependentes: Dependente[];
  }