import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  public termino: string = '';
  public heroes: Heroe[] = [];
  public heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  public buscando() {
    this.heroesService
      .getSugerencias(this.termino.trim())
      .subscribe((heroes: Heroe[]) => (this.heroes = heroes));
  }

  public opcionSeleccionada(event: MatAutocompleteSelectedEvent): void {
    if (event.option.value) {
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;
      this.heroesService.getHeroePorId(heroe.id!).subscribe((heroe: Heroe) => {
        this.heroeSeleccionado = heroe;
      });
    } else {
      this.heroeSeleccionado = undefined;
    }
  }
}
