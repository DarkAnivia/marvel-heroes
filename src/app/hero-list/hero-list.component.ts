import { character } from './../shared/interfaces/character';
import { Observable } from 'rxjs';
import { load_characters } from './../state/app.actions';
import { HeroService } from './../shared/services/hero.service';
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

  ngOnInit() {


  }

  public submit(){
    this.store.dispatch(load_characters({character: this.character}))

  }
 
}
