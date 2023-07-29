import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../models/question';
import { BuildService } from '../services/build.service';
import { firstValueFrom } from 'rxjs';
import { Account } from '../models/account';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private buildService: BuildService) {
  }
  QuestionCode!: string;
  Question?: Question;
  Account?: Account;
  Criteria: string = '';

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.QuestionCode = params['code'];
      this.loadQuestion();
    });
  }

  async loadQuestion() {
    const questions$ = this.buildService.GetQuestionsForMember('1234');
    let questions = await firstValueFrom(questions$);
    this.Question = questions.find(q=>q.Code==this.QuestionCode);
    if(this.Question?.Qualifier) {
      this.loadAccount();
    }
  }

  async loadAccount(){
    const acct$ = this.buildService.GetAccount('1234');
    this.Account = await firstValueFrom(acct$);
  }

  async setCriteria(type: string, iden: string) {
    this.Criteria = iden;

  }
}
