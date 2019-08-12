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
        map(heroes => ({ type: '[HeroList Component] LoadSuccess', characters: heroes })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions: Actions,
    private heroSrv: HeroService) { }
}