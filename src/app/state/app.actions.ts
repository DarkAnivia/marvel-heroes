import { createAction, props } from '@ngrx/store';
import { character } from '../shared/interfaces/character';

export const load_characters = createAction('[HeroList Component] Load', props<{character: string}>());
export const loaded_characters = createAction('[HeroService Service] LoadSuccess', props<{characters: Array<character>}>());
export const error_characters = createAction('[HeroService Service] LoadError');