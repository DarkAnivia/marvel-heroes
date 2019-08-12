import { MarvelResponse } from './MarvelResponse';
import { Character } from './character';

export interface getCharactersFilteredByNameResponse extends MarvelResponse {
    results?: Array<Character>;
}