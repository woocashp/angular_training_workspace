import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { MyLibModule } from 'my-lib';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent}
    ]),
    MyLibModule,
    SharedModule
  ]
})
export class CartModule { }
