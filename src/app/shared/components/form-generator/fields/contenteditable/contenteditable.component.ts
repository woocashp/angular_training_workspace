import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenteditable',
  template: `
    <p>
      contenteditable works!
    </p>
  `,
  styles: [
  ]
})
export class ContenteditableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
