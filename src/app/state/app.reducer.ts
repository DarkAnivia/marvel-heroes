import { createReducer, on } from '@ngrx/store';
import { load_characters, loaded_characters, loaded_comics, load_comics, error_action } from './app.actions';
import { HeroStore } from './interface/HeroStore';

export const initialState: HeroStore = {characters: [], comics: [], loading: false} ;

export const charactersReducer = createReducer(initialState,
  on(load_characters,
    load_comics,
     (state => ({...state, loading: true}))),
  on(error_action,
  (state => ({...state, loading: false}))),
  on(loaded_characters, (state,{characters}) =>  ({
    ...state,
    characters: characters,
    loading:false
  })),
  on(loaded_comics, (state,{comics}) =>  ({
    ...state,
    comics: comics,
    loading: false
  }))
  );