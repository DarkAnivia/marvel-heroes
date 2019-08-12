import { HeroService } from './../shared/services/hero.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';


@Injectable()
export class HeroEffect {
 
  public loadHeroes = createEffect(() => this.actions.pipe(
    ofType('[HeroList Component] Load'),
    exhaustMap(action => this.heroSrv.getCharactersFilteredByName(action)
      .pipe(
        map(heroes => ({ type: '[HeroService Service] CharacterLoadSuccess', characters: heroes })),
        catchError(() => EMPTY)
      ))
    )
  );

  public loadComic = createEffect(() => this.actions.pipe(
    ofType('[HeroDetail Component] Load'),
    exhaustMap(action => this.heroSrv.getComicsByCharacterIdOrderByOnSaleDateDesc(action)
      .pipe(
        map(comics => ({ type: '[HeroService Service] ComicLoadSuccess', comics: comics })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions: Actions,
    private heroSrv: HeroService) { }
}