import { Observable } from 'rxjs';
import { load_characters, loaded_characters } from './../state/app.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HeroStore } from '../state/interface/HeroStore';
import { Character } from '../shared/interfaces/Character';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass'],
  animations: [ ]
})
export class HeroListComponent implements OnInit {
  public character:string;
  public heroStore: Observable<HeroStore>;
  public heroes: Array<Character>
  public showLoading: boolean;

  
  constructor( private store: Store<HeroStore>) { 
  }

  ngOnInit() {
    this.heroStore = this.store.pipe(select('marvel'))
    this.heroStore.subscribe(data => {
      this.heroes = data.characters
      this.showLoading= data.loading});
  }

  public search(character: string){
    if(character){    
      this.store.dispatch(load_characters({character: character}))
    }else{
      this.store.dispatch(loaded_characters({characters: []}))
    }

  }
 
}
