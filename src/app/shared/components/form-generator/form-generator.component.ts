import { FieldConfig, FieldTypes } from './../../models/form.models';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {


  form: FormGroup = new FormGroup({});
  formConfig!: FieldConfig[];


  createForm(config: FieldConfig[]) {
    this.formConfig = config;
    config
      .filter((fieldConfig) => fieldConfig.type !== FieldTypes.button)
      .forEach((fieldConfig) => {
        this.form.addControl(fieldConfig.name, this.fb.control(fieldConfig.value));
      })
  }


  @Input() set config(val: FieldConfig[]) {
    if (val) {
      this.createForm(val)
    }
  }


  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.form.valid
      ? console.log(this.form.value)
      : console.warn(this.form.value);
  }
}

