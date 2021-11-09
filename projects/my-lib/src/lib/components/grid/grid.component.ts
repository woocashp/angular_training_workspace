import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() headers: any[] = [];
  @ContentChild(TemplateRef) tpl!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
