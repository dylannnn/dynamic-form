import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../core/question/question.base';
import { QuestionService } from '../../core/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  // providers: [ QuestionControlService ]
})
export class QuestionComponent implements OnInit {

  constructor(
    private qs: QuestionService
  ) {
    this.qs.getQuestions();
  }

  ngOnInit() {
  }

}
