import { Component } from '@angular/core';
import { QuestionService } from './core/question/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-form';
  questions: any[];
  constructor(
    private service: QuestionService
  ) {
    this.questions = service.getQuestions();
  }
}
