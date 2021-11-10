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
      <div class="error">
        {{form.get(config.name)?.errors | json}}

        <!-- <app-errors [errors]="form.get(config.name)?.errors"></app-errors> -->
        <div class="error" *ngIf="form.get(config.name)?.hasError">
          Pole wymagane
        </div>
      </div>
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
