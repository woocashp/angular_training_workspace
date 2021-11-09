import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { GridComponent } from './components/grid/grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { gToken } from './token';



@NgModule({
  declarations: [
    MyLibComponent,
    GridComponent
  ],
  imports: [
    BrowserModule
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
