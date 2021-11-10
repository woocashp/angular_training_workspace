import { Injectable } from '@angular/core';
import { from, of, skip, withLatestFrom } from 'rxjs';
import { ItemModel } from 'src/app/shared/models/services.models';
import { CartItemModel } from 'src/app/shared/models/store.models';
import { Store } from 'src/app/shared/services/store';
import { Utils } from 'src/app/shared/utils/utils';
import { CartIDBService } from './cart-idb.service';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService extends Store<CartItemModel[]>{
  removeItem(item: ItemModel) {
    of(item)
      .pipe(
        withLatestFrom(super.getState())
      )
      .subscribe(([item, state]) => {
        const newState = Utils.removeOrDecreaseParam(state, item, 'count')
        super.setState(newState)
      });
  }

  buyItem(item: ItemModel) {
    of(item)
      .pipe(
        withLatestFrom(super.getState())
      )
      .subscribe(([item, state]) => {
        const newState = Utils.addOrIncreaseParam(state, item, 'count')
        super.setState(newState)
      });
  }

  constructor(private idbService: CartIDBService) {
    super([]);

    from(idbService.get()).subscribe((state: any) => {
      super.setState(state);
    })

    super.getState()
      .pipe(
        skip(1)
      )
      .subscribe((state: any) => idbService.update(state))
   }
}
