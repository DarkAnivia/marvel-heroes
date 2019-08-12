import { createAction, props } from '@ngrx/store';
import { character } from '../shared/interfaces/character';

export const load_characters = createAction('[HeroList Component] Load', props<{character: string}>());
export const loaded_characters = createAction('[HeroList Component] LoadSuccess', props<{characters: Array<character>}>())