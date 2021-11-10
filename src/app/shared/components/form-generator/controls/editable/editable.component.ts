import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styles: [
  ],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: EditableComponent, multi: true}
  ]
})
export class EditableComponent implements OnInit, ControlValueAccessor {

  onChange!: Function;
  @Input() data!: any;

  constructor() { }
  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {
    // debugger;
    this.onChange = fn;

  }
  registerOnTouched(fn: any): void {

  }

  ngOnInit(): void {
  }

}
