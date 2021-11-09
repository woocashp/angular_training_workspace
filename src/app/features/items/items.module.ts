import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/items/items.component';
import { RouterModule } from '@angular/router';
import { MyLibModule } from 'my-lib';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ItemsComponent}
    ]),
    MyLibModule,
    HttpClientModule
  ]
})
export class ItemsModule { }
