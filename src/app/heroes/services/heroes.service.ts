import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  public getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  public getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(
      `${this.baseUrl}/heroes?q=${query}&_limit=6`
    );
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  public updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${ hero.id }`, hero);
  }

  public deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/heroes/${ id }`)
      .pipe(
        catchError(err => of(false)),
        map(resp => true)
      );
  }
}
