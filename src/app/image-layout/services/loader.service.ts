import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loadingEffect$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingEffect$.asObservable();

  constructor() {}

  setLoading(isLoad: boolean) {
    return this.loadingEffect$.next(isLoad);
  }
}
