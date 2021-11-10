import { Injectable } from '@angular/core';
import { of, withLatestFrom } from 'rxjs';
import { ItemModel } from 'src/app/shared/models/services.models';
import { CartItemModel } from 'src/app/shared/models/store.models';
import { Store } from 'src/app/shared/services/store';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService extends Store<CartItemModel[]>{

  buyItem(item: ItemModel) {
    of(item)
      .pipe(
        withLatestFrom(super.getState())
      )
      .subscribe(([item, state]) => {
        super.setState([...state, { ...item, count: 1 } ])
      });
  }

  constructor() {
    super([])
   }
}
