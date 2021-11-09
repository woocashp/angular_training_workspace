import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { gToken } from 'my-lib';
import { map, Observable, tap } from 'rxjs';
import { ItemModel } from 'src/app/shared/models/services.models';
import { ItemsStoreService } from '../../items-store.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [
    { provide: gToken, useValue: { bgColor: 'lightgreen', textColor: 'red'}}
  ]
})
export class ItemsComponent implements OnInit {

  gdata$:Observable<any>;

  constructor(private itemsService: ItemsStoreService) {
    this.gdata$ = this.itemsService.getState();
  }

  ngOnInit(): void {
    this.itemsService.fetch()
  }

  onBuy(item: ItemModel) {
    console.warn('I\'m buying', item)
  }
}
