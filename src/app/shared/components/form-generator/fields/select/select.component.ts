import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/form.models';

@Component({
  selector: 'app-select',
  template: `
    <div class="field" [formGroup]="form">
      <label>{{config.label}}</label>
      <select [formControlName]="config.name">
        <option *ngFor="let opt of config.options">
          {{opt}}
        </option>
      </select>
      <!-- <pre>{{config|json}}</pre> -->
    </div>
  `,
  styles: [
  ]
})
export class SelectComponent implements OnInit {

  constructor() { }

  config!: FieldConfig;
  form!: FormGroup;

  ngOnInit(): void {
  }

}
