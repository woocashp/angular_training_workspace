import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ItemModel } from 'src/app/shared/models/services.models';

@Component({
  selector: 'app-item',
  template: `
    <div *ngFor="let item of item$|async|keyvalue">
      {{item.key}} - {{item.value}}
    </div>
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  item$:Observable<any> = this.route.data.pipe(map((v) => v.item));

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
