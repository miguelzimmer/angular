import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [AlunosService]
})
export class AlunoComponent implements OnInit {


  paraExibicaoAluno: string[] = [];

  constructor(private service: AlunosService) { }

  ngOnInit() {
    this.paraExibicaoAluno = this.service.getAlunos();

  }

}
