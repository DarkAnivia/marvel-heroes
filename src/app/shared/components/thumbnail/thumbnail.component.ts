import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.sass']
})
export class ThumbnailComponent implements OnInit {
  @Input() image;
  @Input() alt: string;

  constructor() { }

  ngOnInit() {
  }

  getThumbnailUrl() {
    return `${this.getThumbnailPathWithoutProtocol()}.${this.image.extension}`;
  }

  getThumbnailPathWithoutProtocol() {
    return this.image.path.replace(/^https?:/, '');
  }
}
