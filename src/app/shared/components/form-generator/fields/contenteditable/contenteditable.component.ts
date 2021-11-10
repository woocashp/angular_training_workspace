import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/form.models';

@Component({
  selector: 'app-contenteditable',
  template: `
    <div class="field" [formGroup]="form">
      <label for="">{{config.name}}</label>
        <app-editable [formControlName]="config.name" [data]="config.value"></app-editable>
    </div>
  `,
  styles: [
  ]
})
export class ContenteditableComponent implements OnInit {

  config!: FieldConfig;
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
