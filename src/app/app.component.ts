import { Component, OnInit } from '@angular/core';
import { BuildService } from './services/build.service';
import { Account } from './models/account';
import { firstValueFrom } from 'rxjs';
import { Question } from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private buildService: BuildService) {}
  Questions: Question[] = [];

  ngOnInit(): void {
    this.loadQuestions();
  }
  
  async loadQuestions() {
    const questions$ = this.buildService.GetQuestionsForMember('0000013454');
    this.Questions = await firstValueFrom(questions$);
  }
}