import { Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemsComponent } from 'src/app/features/items/components/items/items.component';
import { ButtonComponent } from '../components/form-generator/fields/button/button.component';
import { ContenteditableComponent } from '../components/form-generator/fields/contenteditable/contenteditable.component';
import { InputComponent } from '../components/form-generator/fields/input/input.component';
import { SelectComponent } from '../components/form-generator/fields/select/select.component';
import { FieldConfig } from '../models/form.models';

const types: any = {
  input: InputComponent,
  // TODO: radio w materiałach
  radio: InputComponent,
  select: SelectComponent,
  contenteditable: ContenteditableComponent,
  button: ButtonComponent
}

@Directive({
  selector: '[appFieldGenerator]'
})
export class FieldGeneratorDirective {

  @Input() set appFieldGenerator({config, form}: {config: FieldConfig, form: FormGroup}) {
    // debugger;
    // this.container.createComponent(ItemsComponent)

    try {
      const comp: any = this.container.createComponent(types[config.type])
      comp.instance.config = config;
      comp.instance.form = form;
    } catch (error) {
      debugger;
    }
  }

  constructor(
    private container: ViewContainerRef
  ) { }
}
