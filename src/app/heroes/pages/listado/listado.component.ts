import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [],
})
export class ListadoComponent implements OnInit {
  public heroes: Heroe[] = [];

  constructor(private herosesService: HeroesService) {}

  ngOnInit(): void {
    this.herosesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
