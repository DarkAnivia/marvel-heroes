import { HeroService } from './../shared/services/hero.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { load_characters, load_comics, loaded_comics, loaded_characters, error_characters, error_comics } from './app.actions';


@Injectable()
export class HeroEffect {
 
  public loadHeroes = createEffect(() => this.actions.pipe(
    ofType(load_characters),
    switchMap(action => this.heroSrv.getCharactersFilteredByName(action.character)
      .pipe(
        map(heroes => ({ type: loaded_characters.type, characters: heroes })),
        catchError((error) => of({type:error_characters.type, error})
      ))
    ))
  );

  public loadComic = createEffect(() => this.actions.pipe(
    ofType(load_comics),
    switchMap(action => this.heroSrv.getComicsByCharacterIdOrderByOnSaleDateDesc(action.characterId)
      .pipe(
        map(comics => ({ type: loaded_comics.type, comics: comics })),
        catchError((error) => of({type:error_characters.type, error})
      ))
    ))
  );

  public error = createEffect(() => this.actions.pipe(
    ofType(error_characters, error_comics),
    exhaustMap(action => this.heroSrv.getComicsByCharacterIdOrderByOnSaleDateDesc(123)
      .pipe(
        map(comics => ({ type: loaded_comics.type, comics: comics })),
        catchError(() => EMPTY)
      ))
    )
  ); 

  constructor(private actions: Actions,
    private heroSrv: HeroService) { }
}