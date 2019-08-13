import { HeroService } from './../shared/services/hero.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { load_characters, load_comics, loaded_comics, loaded_characters } from './app.actions';


@Injectable()
export class HeroEffect {
 
  public loadHeroes = createEffect(() => this.actions.pipe(
    ofType(load_characters),
    exhaustMap(action => this.heroSrv.getCharactersFilteredByName(action.character)
      .pipe(
        map(heroes => ({ type: loaded_characters.type, characters: heroes })),
        catchError(() => EMPTY)
      ))
    )
  );

  public loadComic = createEffect(() => this.actions.pipe(
    ofType(load_comics),
    exhaustMap(action => this.heroSrv.getComicsByCharacterIdOrderByOnSaleDateDesc(action.characterId)
      .pipe(
        map(comics => ({ type: loaded_comics.type, comics: comics })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions: Actions,
    private heroSrv: HeroService) { }
}