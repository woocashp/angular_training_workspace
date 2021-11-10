import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/form.models';

@Component({
  selector: 'app-button',
  template: `
  <div class="field" [formGroup]="form">
    <button>{{config.label}}</button>
    <!-- <pre>{{config|json}}</pre> -->
  </div>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  config!: FieldConfig;
  form!: FormGroup;

  ngOnInit(): void {
  }

}
