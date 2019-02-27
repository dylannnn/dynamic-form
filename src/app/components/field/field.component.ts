import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../../core/question/question.base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() { }

  ngOnInit() {
  }

}
