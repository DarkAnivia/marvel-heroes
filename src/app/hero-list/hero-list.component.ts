import { Observable } from 'rxjs';
import { load_characters, load_comics } from './../state/app.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HeroStore } from '../state/interface/HeroStore';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass'],
  animations: [ ]
})
export class HeroListComponent implements OnInit {
  public character:string;
  public heroStore: Observable<HeroStore>;
  
  constructor( private store: Store<HeroStore>) { 
    this.heroStore = store.pipe(select('marvel'))
    this.heroStore.subscribe(data => console.log(data));
  }

  ngOnInit() {}

  public submit(){
    this.store.dispatch(load_characters({character: this.character}))
    // this.store.dispatch(load_comics({comic: 102}))

  }

  public print(){
    this.heroStore.subscribe(data => console.log(data));
  }
 
}
