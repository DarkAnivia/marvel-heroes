import { Character } from './../shared/interfaces/Character';
import { HeroStore } from './../state/interface/HeroStore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Comic } from '../shared/interfaces/Comic';
import { Observable } from 'rxjs';
import { load_comics } from '../state/app.actions';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
  public hero : Character;
  public comics: Array<Comic>;
  public heroStore: Observable<HeroStore>;

  constructor(private route: ActivatedRoute, private store: Store<HeroStore>) { 
    this.heroStore = store.pipe(select('marvel'))
    this.heroStore.subscribe(data => {
      this.hero = data.characters.find(heroe => heroe.id.toString() === this.route.snapshot.paramMap.get("id"))
      this.comics = data.comics;
    });
  }


  ngOnInit() {
      this.store.dispatch(load_comics({characterId: parseInt(this.route.snapshot.paramMap.get("id"))}));
  }

  public print(){
    console.log(this.hero);
    console.log((this.comics));
  }

}
