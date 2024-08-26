import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'heroes-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent implements OnInit {
  public heroes: Heroe[] = [];

  constructor(private herosesService: HeroesService) {}

  ngOnInit(): void {
    this.herosesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
