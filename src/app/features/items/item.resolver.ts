import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { filter, first, map, Observable, of, tap } from 'rxjs';
import { ItemsStoreService } from './items-store.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<any> {

  constructor(private itemsService: ItemsStoreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.itemsService.getState().pipe(
      tap((val: any[]) => {
        !val.length && this.itemsService.fetch()
      }),
      filter((val: any[]) => !!val.length),
      map(val => val.find(item => item.id === route.params.id)),
      tap(console.log),
      first()
    )
  }
}
