import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IimageList } from '../image-layout-interfaces';

@Component({
  selector: 'aip-image-layout-pics',
  templateUrl: './image-layout-pics.component.html',
  styleUrls: ['./image-layout-pics.component.scss'],
})
export class ImageLayoutPicsComponent implements OnInit {
  showFormCondition: string = '';
  @Input() images: IimageList[] = [];
  @Output() editedItem = new EventEmitter<IimageList>();
  @Output() deletedItem = new EventEmitter<IimageList>();

  constructor() {}

  ngOnInit(): void {}
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
