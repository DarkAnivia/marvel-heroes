import { createAction, props } from '@ngrx/store';
import { Character } from '../shared/interfaces/Character';
import { Comic } from '../shared/interfaces/Comic';

export const load_characters = createAction('[HeroList Component] Load', props<{character: string}>());
export const loaded_characters = createAction('[HeroService Service] CharacterLoadSuccess', props<{characters: Array<Character>}>());
export const error_characters = createAction('[HeroService Service] CharacterLoadError', props<{error: Object}>());

export const load_comics = createAction('[HeroDetail Component] Load', props<{characterId: number}>());
export const loaded_comics = createAction('[HeroService Service] ComicLoadSuccess', props<{comics: Array<Comic>}>());
export const error_comics = createAction('[HeroService Service] ComicLoadError', props<{error: Object}>());