import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'mh-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.sass']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:Character;

  constructor() { }

  ngOnInit() {
  }

}
