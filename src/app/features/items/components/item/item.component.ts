import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  template: `
    <h2>
      {{data$|async|json}}
    </h2>
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  data$:Observable<any> = this.route.data;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
