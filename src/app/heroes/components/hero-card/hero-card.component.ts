import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class HeroCardComponent implements OnInit {
  @Input() public hero!: Hero;

  ngOnInit(): void {
    if(!this.hero) throw Error('Hero property is required');
  }
}
