import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private subject$: Subject<boolean> | undefined = undefined;
  loaderObservable$: Observable<boolean> | undefined = undefined;

  constructor() {
    this.subject$ = new Subject();
    this.loaderObservable$ = this.subject$.asObservable();
  }

  showLoader() {
    this.subject$?.next(true);
  }

  hideLoader() {
    this.subject$?.next(false);
  }

}
