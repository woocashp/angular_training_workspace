import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { MyLibModule } from 'my-lib';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent}
    ]),
    MyLibModule
  ]
})
export class CartModule { }
