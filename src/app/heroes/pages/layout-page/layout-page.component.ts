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
  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: './new-hero'
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: './search'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
