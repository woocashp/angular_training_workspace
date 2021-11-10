import { Component, OnInit } from '@angular/core';
import { gToken } from 'my-lib';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/shared/models/services.models';
import { CartStoreService } from '../../cart-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [
    { provide: gToken, useValue: { bgColor: 'lightblue', textColor: 'blue'}}
  ]
})
export class CartComponent implements OnInit {

  cart$: Observable<any> = this.cartService.getState()

  constructor(private cartService: CartStoreService) { }

  ngOnInit(): void {
  }

  add(item: ItemModel) {
    this.cartService.buyItem(item)
  }

  remove(item: ItemModel) {
    this.cartService.removeItem(item);
  }

}
