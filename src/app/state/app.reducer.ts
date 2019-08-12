import { createReducer, on } from '@ngrx/store';
import { load_characters, loaded_characters } from './app.actions';
import { HeroStore } from './interface/HeroStore';

export const initialState: HeroStore = {characters: [], comics: []} ;

export const charactersReducer = createReducer(initialState,
  on(load_characters, state => state),
  on(loaded_characters, (state,{characters}) =>  ({
    ...state,
    characters: characters
  })
));