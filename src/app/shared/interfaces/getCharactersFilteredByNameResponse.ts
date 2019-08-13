import { MarvelResponse } from './MarvelResponse';
import { Character } from './Character';

export interface getCharactersFilteredByNameResponse extends MarvelResponse {
    results?: Array<Character>;
}