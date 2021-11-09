import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/items/items.component';
import { RouterModule } from '@angular/router';
import { MyLibModule } from 'my-lib';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';



@NgModule({
  declarations: [
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ItemsComponent},
      { path: ':id', component: ItemComponent}
    ]),
    MyLibModule,
    HttpClientModule
  ]
})
export class ItemsModule { }
