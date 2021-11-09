import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/shared/models/services.models';

@Component({
  selector: 'app-item',
  template: `
    <div *ngFor="let item of (data$|async).item|keyvalue">
      {{item.key}} - {{item.value}}
    </div>
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  item?: ItemModel;

  data$:Observable<any> = this.route.data;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
