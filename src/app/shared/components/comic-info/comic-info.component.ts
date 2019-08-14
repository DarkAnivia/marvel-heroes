import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../interfaces/Comic';
import { formatDate } from '../../utils/formatDate';

@Component({
  selector: 'mh-comic-info',
  templateUrl: './comic-info.component.html',
  styleUrls: ['./comic-info.component.sass']
})
export class ComicInfoComponent implements OnInit {

  @Input() comics: Comic[]

  constructor() { }

  ngOnInit() {
  }

  public getDate(date : Date):string{
    return formatDate(date,'DD/MM/YYYY');
  }

}
