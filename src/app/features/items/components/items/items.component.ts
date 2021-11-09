import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { gToken } from 'my-lib';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [
    { provide: gToken, useValue: { bgColor: 'lightgreen', textColor: 'red'}}
  ]
})
export class ItemsComponent implements OnInit {

  gdata$:Observable<any> = this.http.get('https://api.debugger.pl/items').pipe(map((res:any) => res.data))

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onBuy(item: any) {
    console.warn('I\'m buying', item)
  }
}
