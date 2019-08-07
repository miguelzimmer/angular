import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos:string[]=[];

  constructor() {
    this.alunos =['Miguel','Gabriel',
    'Samara','Gilmar','Rose']

   }

   getAlunos(){
     return this.alunos;
   }


  }
