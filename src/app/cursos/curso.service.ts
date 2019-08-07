import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  private cursos:string[]=[];

  constructor() {
    this.cursos =['Tecnico em informatica','Tecnico em Redes',
    'Superior em Analise Desenvolvimento']

   }

   getCursos(){
     return this.cursos;
   }



}
