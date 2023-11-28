import { Component, Input, OnInit } from '@angular/core';
import { IimageList } from '../image-layout-interfaces';

@Component({
  selector: 'aip-image-layout-pics',
  templateUrl: './image-layout-pics.component.html',
  styleUrls: ['./image-layout-pics.component.scss'],
})
export class ImageLayoutPicsComponent implements OnInit {
  @Input() images: IimageList[] = [];

  constructor() {}

  ngOnInit(): void {}
}
