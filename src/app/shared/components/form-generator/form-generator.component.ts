import { FieldConfig, FieldTypes, FieldValidator } from './../../models/form.models';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';


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
        // debugger;
        this.form.addControl(fieldConfig.name, this.fb.control(fieldConfig.value, this.getValidators(fieldConfig.validators)));
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

  getValidators(validators: FieldValidator[] | undefined): ValidatorFn[] | null {
    if (!validators) return null;
    return validators.map((validator: FieldValidator): ValidatorFn => {
      return validator.name in Validators
        ? validator.param
          ? (Validators[validator.name] as Function)(validator.param)
          : Validators[validator.name]
        : null;
    });
  }

  onSubmit() {
    this.form.valid
      ? console.log(this.form.value)
      : console.warn(this.form.value);
  }
}

