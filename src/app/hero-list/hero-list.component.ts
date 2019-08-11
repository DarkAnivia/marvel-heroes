import { HeroService } from './../shared/services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass'],
  animations: [ ]
})
export class HeroListComponent implements OnInit {
  public character:string;

  constructor( private heroSrv: HeroService) { 

 

  }

  ngOnInit() {


  }

  public submit(){


      

  }
 



}
