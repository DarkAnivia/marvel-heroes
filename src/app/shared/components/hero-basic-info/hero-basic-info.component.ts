import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/Character';
import { formatDate } from '../../utils/formatDate';



@Component({
  selector: 'mh-hero-basic-info',
  templateUrl: './hero-basic-info.component.html',
  styleUrls: ['./hero-basic-info.component.sass']
})
export class HeroBasicInfoComponent implements OnInit {
  
  @Input() hero:Character;

  constructor() { }

  ngOnInit() {
  }

  public getFormatedDate(date: Date):string{
    return  formatDate(date,'DD/MM/YYYY');
  }

}
