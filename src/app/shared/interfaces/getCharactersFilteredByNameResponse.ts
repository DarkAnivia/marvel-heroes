import { marvelResponse } from './marvelResponse';
import { character } from './character';

export interface getCharactersFilteredByNameResponse extends marvelResponse {
    results?: Array<character>;
}