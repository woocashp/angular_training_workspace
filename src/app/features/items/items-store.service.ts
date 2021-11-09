import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ItemModel } from 'src/app/shared/models/services.models';
import { Store } from 'src/app/shared/services/store';
import { Api } from 'src/app/shared/utils/api';

@Injectable({
  providedIn: 'root'
})
export class ItemsStoreService extends Store<ItemModel[]> {
  fetch() {
    this.http.get(Api.ITEMS_END_POINT).pipe(map((res:any) => res.data)).subscribe((data) => super.setState(data))
  }

  constructor(private http: HttpClient) {
    super([])
  }
}
