import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { endpoints } from './endpoints';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getCharactersFilteredByNameResponse } from '../interfaces/getCharactersFilteredByNameResponse';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private api: Api) { 
  }

  public getCharactersFilteredByName (name: string): Observable<getCharactersFilteredByNameResponse>{
    return this.api.get(endpoints.character,{name: name}).pipe
    (map(res =>{;
      return res.data.data.results}))
  }

  public getComicsByCharacterIdOrderByOnSaleDateDesc(id: string): Observable<Object>{
    //Could improve to be more generic
    return this.api.get(endpoints.comics, {characters: id, orderBy:'onsaleDate'}).pipe
    (map(res =>res.data.data.results))
  }



}
