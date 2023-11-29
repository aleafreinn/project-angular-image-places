import { Injectable } from '@angular/core';
import { IimageList } from '../image-layout-interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageLayoutService {
  imageList: IimageList[] = [];
  constructor(private http: HttpClient) {}

  getImageList() {
    return this.http
      .get<IimageList[]>(`${environment.apiEndpoint}/imageList`)
      .pipe(
        map((data) => {
          this.imageList = [...data];
          return this.imageList;
        })
      );
  }

  addImageItem(item: IimageList) {
    return this.http
      .post<IimageList>(`${environment.apiEndpoint}/imageList`, item)
      .pipe(
        map((data) => {
          // console.log(data);
          this.imageList = [...this.imageList, data];
          return this.imageList;
        })
      );
  }

  editImageItem(item: IimageList) {
    return this.http
      .put<IimageList>(`${environment.apiEndpoint}/imageList/${item.id}`, item)
      .pipe(
        map((data) => {
          this.imageList = this.imageList.map((image) => {
            if (image.id === data.id) {
              return { ...data };
            } else return image;
          });
          return this.imageList;
        })
      );
  }

  deleteImageItem(item: IimageList) {
    return this.http
      .delete<IimageList>(`${environment.apiEndpoint}/imageList/${item.id}`)
      .pipe(
        map((data) => {
          this.imageList = this.imageList.filter((image) => {
            return image.id !== item.id;
          });
          return this.imageList;
        })
      );
  }
  // this.imageList = this.imageList.filter((image) => {
  //   return image.id !== item.id
  // })
}
