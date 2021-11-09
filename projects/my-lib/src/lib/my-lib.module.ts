import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { GridComponent } from './components/grid/grid.component';
import { gToken } from './token';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MyLibComponent,
    GridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyLibComponent,
    GridComponent
  ],
  providers: [
    { provide: gToken, useValue: { bgColor: 'red', textColor: 'yellow'}}
  ]
})
export class MyLibModule { }
