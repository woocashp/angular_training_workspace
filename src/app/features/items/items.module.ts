import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/items/items.component';
import { RouterModule } from '@angular/router';
import { MyLibModule } from 'my-lib';



@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ItemsComponent}
    ]),
    MyLibModule
  ]
})
export class ItemsModule { }
