import { MarvelResponse } from './MarvelResponse';
import { Comic } from './Comic';

export interface getComicsByCharacterIdOrderByOnSaleDateDescResponse extends MarvelResponse{
    results: Array<Comic>
}