import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.sass']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe;

  constructor() { }

  ngOnInit() {
  }

}
