import { HeroStore } from './../../state/interface/HeroStore';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailGuardService implements CanActivate{


  private heroStore: HeroStore

  constructor(private actRouter: ActivatedRoute,
    private store: Store<HeroStore>,
    private router: Router) {
      this.store.pipe(select('marvel')).subscribe(heroStore => this.heroStore=heroStore)
    }

  canActivate() {
    console.log(this.actRouter.snapshot.paramMap.get("id"));
    console.log(this.heroStore.characters);
    if (this.heroStore.characters.find(heroe => heroe.id.toString() === this.actRouter.snapshot.paramMap.get("id")))
    {
      return true
    }else{
      this.router.navigate(['/heroes']);
      return false
    }
  }
}
