import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { GridComponent } from './components/grid/grid.component';
import { BrowserModule } from '@angular/platform-browser';



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
  ]
})
export class MyLibModule { }
