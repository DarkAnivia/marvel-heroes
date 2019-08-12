import { MarvelResponse } from './MarvelResponse';
import { Comic } from './comic';

export interface getComicsByCharacterIdOrderByOnSaleDateDescResponse extends MarvelResponse{
    results: Array<Comic>
}