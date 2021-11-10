import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDirective } from './directives/active.directive';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerComponent } from "../shared/components/spinner/spinner.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';
import { FieldGeneratorDirective } from './directives/field-generator.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/form-generator/fields/input/input.component';
import { SelectComponent } from './components/form-generator/fields/select/select.component';
import { ButtonComponent } from './components/form-generator/fields/button/button.component';
import { ContenteditableComponent } from './components/form-generator/fields/contenteditable/contenteditable.component';
import { EditableComponent } from './components/form-generator/controls/editable/editable.component';

@NgModule({
  declarations: [ActiveDirective, SpinnerComponent, FormGeneratorComponent, FieldGeneratorDirective, InputComponent, SelectComponent, ButtonComponent, ContenteditableComponent, EditableComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  exports: [ActiveDirective, SpinnerComponent, FormGeneratorComponent, FieldGeneratorDirective]
})
export class SharedModule { }
