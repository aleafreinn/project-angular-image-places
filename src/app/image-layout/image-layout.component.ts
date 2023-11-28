import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageLayoutService } from './services/image-layout.service';
import { IimageList } from './image-layout-interfaces';

@Component({
  selector: 'aip-image-layout',
  templateUrl: './image-layout.component.html',
  styleUrls: ['./image-layout.component.scss'],
})
export class ImageLayoutComponent implements OnInit, OnChanges {
  imageList: IimageList[] = [];
  showForm: boolean = false;

  constructor(private imageLayoutService: ImageLayoutService) {}

  ngOnChanges(changes: SimpleChanges) {
    // if(changes[''])
  }

  ngOnInit() {
    this.imageLayoutService.getImageList().subscribe((data) => {
      this.imageList = data;
    });
  }

  setShowForm() {
    this.showForm = !this.showForm;
  }

  addImageHandler(item: IimageList) {
    // this.imageLayoutService.addImageItem(item).subscribe();
    console.log(item);
  }
}
