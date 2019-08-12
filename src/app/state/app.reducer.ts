import { createReducer, on } from '@ngrx/store';
import { load_characters, loaded_characters, loaded_comics, load_comics } from './app.actions';
import { HeroStore } from './interface/HeroStore';

export const initialState: HeroStore = {characters: [], comics: []} ;

export const charactersReducer = createReducer(initialState,
  on(load_characters, state => state),
  on(loaded_characters, (state,{characters}) =>  ({
    ...state,
    characters: characters
  })),
  on(load_comics, state => state),
  on(loaded_comics, (state,{comics}) =>  ({
    ...state,
    comics: comics
  }))
  );