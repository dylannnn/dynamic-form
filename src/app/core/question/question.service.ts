import { Injectable } from '@angular/core';

import { QuestionBase } from './question.base';
import { TextboxQuestion } from './question-type/question.input';
import { DropdownQuestion } from './question-type/question.select';
import { TextareaQuestion } from './question-type/question.textarea';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions() {
    const questions: QuestionBase<any>[] = [];
    const $questions = [
      {
        value: '',
        key: 'question1',
        label: 'My question one label',
        required: true,
        order: 4,
        controlElement: 'input',
        controlType: 'text',
      },
      {
        value: '',
        key: 'question2',
        label: 'My question two label',
        required: false,
        order: 2,
        controlElement: 'input',
        controlType: 'email'
      },
      {
        value: '',
        key: 'question3',
        label: 'My question three label',
        required: false,
        order: 3,
        controlElement: 'select',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ]
      },
      {
        value: '',
        key: 'question4',
        label: 'My question four label',
        required: false,
        order: 1,
        controlElement: 'textarea',
        placeholder: 'My question four placeholder'
      }
    ];
    // Map question to the correct type
    $questions.forEach((result) => {
      switch (result.controlElement) {
        case 'input':
          console.log('Return [Input]: ', new TextboxQuestion(result));
          return questions.push(new TextboxQuestion(result));
          break;
        case 'select':
          console.log('Return [Select]: ', new DropdownQuestion(result));
          return questions.push(new DropdownQuestion(result));
          break;
        case 'textarea':
          console.log('Return [textarea]: ', new TextareaQuestion(result));
          return questions.push(new TextareaQuestion(result));
          break;
        default:
          console.log('Return default [Input]: ', new TextareaQuestion(result));
          return questions.push(new TextboxQuestion(result));
      }
    });

    console.log('Final question: ', questions);
    return questions.sort((a, b) => a.order - b.order);
  }
}
