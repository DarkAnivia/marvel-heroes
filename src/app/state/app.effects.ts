import { HeroService } from './../shared/services/hero.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {  of, EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { load_characters, load_comics, loaded_comics, loaded_characters, error_action } from './app.actions';
import { ErrorService } from '../shared/services/error.service';


@Injectable()
export class HeroEffect {
 
  public loadHeroes = createEffect(() => this.actions.pipe(
    ofType(load_characters),
    switchMap(action => this.heroSrv.getCharactersFilteredByName(action.character)
      .pipe(
        map(heroes => ({ type: loaded_characters.type, characters: heroes })),
        catchError((error) => of({type:error_action.type, error})
      ))
    ))
  );

  public loadComic = createEffect(() => this.actions.pipe(
    ofType(load_comics),
    switchMap(action => this.heroSrv.getComicsByCharacterIdOrderByOnSaleDateDesc(action.characterId)
      .pipe(
        map(comics => ({ type: loaded_comics.type, comics: comics })),
        catchError((error) => of({type:error_action.type, error})
      ))
    ))
  );

  public error = createEffect(() => this.actions.pipe(
    ofType(error_action),
    switchMap((action) => { this.errorSrv.handleErrors(action.error);
    return of(EMPTY)})
    ),
    {dispatch : false}
  ); 

  constructor(private actions: Actions,
    private heroSrv: HeroService,
    private errorSrv: ErrorService) { }
}