import { load_characters } from './../state/app.actions';
import { HeroService } from './../shared/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass'],
  animations: [ ]
})
export class HeroListComponent implements OnInit {
  public character:string;

  constructor( private heroSrv: HeroService,
    private store: Store<Object>) { 

 

  }

  ngOnInit() {


  }

  public submit(){
    this.store.dispatch(load_characters({character: this.character}))

  }
 
}
