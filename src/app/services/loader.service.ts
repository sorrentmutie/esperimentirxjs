import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  showLoader() {
    console.log('show loader');
  }

  hideLoader() {
    console.log('hide loader');
  }

}
