import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroes-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class LayoutPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
