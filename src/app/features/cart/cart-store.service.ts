import { Injectable } from '@angular/core';
import { CartItemModel } from 'src/app/shared/models/store.models';
import { Store } from 'src/app/shared/services/store';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService extends Store<CartItemModel[]>{

  constructor() {
    super([])
   }
}
