import { Component, ContentChild, Inject, Input, OnInit, Optional, TemplateRef } from '@angular/core';
import { gToken } from '../../token';

@Component({
  selector: 'lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() headers: any[] = [];
  @ContentChild(TemplateRef) tpl!: TemplateRef<any>;

  // let currentPage: number = 0;
  // let pageSize: number = 10;

  constructor(
    @Optional() @Inject(gToken) public colors: any
  ) { }

  ngOnInit(): void {
  }

}
