import { Observable } from 'rxjs';
import { load_characters } from './../state/app.actions';
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

  
  constructor( private store: Store<HeroStore>) { 
    this.heroStore = store.pipe(select('marvel'))
    this.heroStore.subscribe(data => this.heroes = data.characters);
  }

  ngOnInit() {}

  public submit(){
    this.store.dispatch(load_characters({character: this.character}))

  }

  public print(){
    this.heroStore.subscribe(data => console.log(data));
  }
 
}
