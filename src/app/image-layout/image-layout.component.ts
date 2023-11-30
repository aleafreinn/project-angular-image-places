import {
  Component,
  HostBinding,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
  // @HostBinding('@modalSlideInOut')
  setShowForm() {
    this.showForm = !this.showForm;
  }

  addImageHandler(item: IimageList) {
    this.imageLayoutService.addImageItem(item).subscribe((data) => {
      this.imageList = data;
    });
    // console.log(this.imageList);
    this.showForm = false;
  }

  editImageHandler(item: IimageList) {
    console.log(item);
    this.imageLayoutService.editImageItem(item).subscribe((data) => {
      this.imageList = data;
    });
  }

  deleteImageHandler(item: IimageList) {
    this.imageLayoutService.deleteImageItem(item).subscribe((data) => {
      this.imageList = data;
    });
  }
}
