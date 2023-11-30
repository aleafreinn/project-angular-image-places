import {
  Component,
  HostBinding,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ImageLayoutService } from './services/image-layout.service';
import { IimageList } from './image-layout-interfaces';
import { delay, finalize, tap } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'aip-image-layout',
  templateUrl: './image-layout.component.html',
  styleUrls: ['./image-layout.component.scss'],
})
export class ImageLayoutComponent implements OnInit, OnChanges {
  imageList: IimageList[] = [];
  showForm: boolean = false;

  constructor(
    private imageLayoutService: ImageLayoutService,
    public loaderService: LoaderService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // if(changes[''])
  }

  ngOnInit() {
    // this.imageLayoutService.getImageList().subscribe((data) => {
    //   this.imageList = data;
    // });
    this.getImageHandler();
  }
  // @HostBinding('@modalSlideInOut')
  setShowForm() {
    this.showForm = !this.showForm;
  }

  getImageHandler() {
    this.imageLayoutService
      .getImageList()
      .pipe(
        // this.imageLayoutService.setLoading(true)
        tap(() => this.loaderService.setLoading(true)),
        delay(1000),
        finalize(() => this.loaderService.setLoading(false))
      )
      .subscribe((data) => {
        this.imageList = data;
      });
  }

  addImageHandler(item: IimageList) {
    this.imageLayoutService.addImageItem(item).subscribe(() => {
      // this.imageList = data;
      this.getImageHandler();
    });
    // console.log(this.imageList);
    this.showForm = false;
  }

  editImageHandler(item: IimageList) {
    console.log(item);
    this.imageLayoutService.editImageItem(item).subscribe(() => {
      this.getImageHandler();
      // this.imageList = data;
    });
  }

  deleteImageHandler(item: IimageList) {
    this.imageLayoutService.deleteImageItem(item).subscribe(() => {
      this.getImageHandler();
      // this.imageList = data;
    });
  }
}
