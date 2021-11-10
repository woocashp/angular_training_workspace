import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/form.models';

@Component({
  selector: 'app-input',
  template: `
    <div class="field" [formGroup]="form">
      <label>{{config.label}}</label>
      <input type="text" [formControlName]="config.name">
      <!-- <pre>{{config|json}}</pre> -->
    </div>
  `,
  styles: [
  ]
})
export class InputComponent implements OnInit {

  config!: FieldConfig;
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
