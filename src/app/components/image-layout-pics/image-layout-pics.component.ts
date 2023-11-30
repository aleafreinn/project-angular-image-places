import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IimageList } from '../../image-layout/image-layout-interfaces';

@Component({
  selector: 'aip-image-layout-pics',
  templateUrl: './image-layout-pics.component.html',
  styleUrls: ['./image-layout-pics.component.scss'],
})
export class ImageLayoutPicsComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() images: IimageList[] = [];
  @Output() editedItem = new EventEmitter<IimageList>();
  @Output() deletedItem = new EventEmitter<IimageList>();
  showFormCondition: string = '';
  showImageBox: string = '';

  imageNum: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.showImageBox = this.images[0].id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['images'].currentValue[0].id);
    // if (changes['images']) {
    //   this.showImageBox === ''
    //     ? changes['images'].currentValue[0].id
    //     : this.showImageBox;
    // }
    if (changes['images']) {
      this.imageNum = this.images
        .map((item, index) => index)
        .filter((num) => {
          return num === 0 ? true : (num + 1) % 6 === 0 ? true : false;
        });

      this.showImageBox =
        this.showImageBox === ''
          ? changes['images'].currentValue[0].id
          : this.showImageBox;
    }
  }

  setOpenImage(image: IimageList) {
    this.showImageBox = image.id;
  }

  setShowEditForm(image: IimageList) {
    this.showFormCondition =
      this.showFormCondition === image.id ? '' : image.id;
  }

  editedImage(image: IimageList) {
    this.editedItem.emit(image);
    this.showFormCondition = '';
  }

  itemToDelete(image: IimageList) {
    this.deletedItem.emit(image);
  }
}
