import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { GridComponent } from './components/grid/grid.component';



@NgModule({
  declarations: [
    MyLibComponent,
    GridComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    GridComponent
  ]
})
export class MyLibModule { }
