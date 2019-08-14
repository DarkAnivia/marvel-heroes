import { Character } from './../shared/interfaces/Character';
import { HeroStore } from './../state/interface/HeroStore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Comic } from '../shared/interfaces/Comic';
import { Observable } from 'rxjs';
import { load_comics } from '../state/app.actions';
import { TranslateService } from '@ngx-translate/core';
import { formatDate } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
  public hero : Character;
  public comics: Comic[];
  public heroStore: Observable<HeroStore>;
  public heroName= {};

  constructor(private actRoute: ActivatedRoute, 
    private route: Router, 
    private store: Store<HeroStore>,
    private translationSrv: TranslateService) 
    {}


  ngOnInit() {
    this.heroStore = this.store.pipe(select('marvel'))
    const heroeId: string = this.actRoute.snapshot.paramMap.get("id");
    this.heroStore.subscribe(data => {
      this.hero = data.characters.find(heroe => heroe.id.toString() === heroeId)
      this.comics = data.comics;
      this.heroName = {name: this.hero.name};
      if (!this.hero){
        this.route.navigate(['/heroes'])
      }
    });
      this.store.dispatch(load_comics({characterId: parseInt(heroeId)}));

  }

  public print(){
    this.route.navigate(['/heroes'])
  }


}
