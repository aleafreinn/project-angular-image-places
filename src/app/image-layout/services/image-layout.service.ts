import { Injectable } from '@angular/core';
import { IimageList } from '../image-layout-interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageLayoutService {
  constructor(private http: HttpClient) {}

  getImageList() {
    return this.http
      .get<IimageList[]>(`${environment.apiEndpoint}/imageList`)
      .pipe(map((data) => [...data]));
  }

  addImageItem(item: IimageList) {
    return this.http
      .post<IimageList>(`${environment.apiEndpoint}/imageList`, item)
      .pipe(
        map((data) => {
          console.log(data);
        })
      );
  }
}
