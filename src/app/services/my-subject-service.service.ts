import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class MySubjectService {

  private subject$: Subject<Customer> | undefined = undefined;
  private myInterval: any;

  customerObservable$: Observable<Customer> | undefined = undefined;
  constructor() {
    this.subject$ = new Subject();
    this.customerObservable$= this.subject$.asObservable();
  }

  startCustomerEmission() {
    this.myInterval =   setInterval( () => {
      const customer = { name: Math.random().toString(), city: Math.random().toString()};
      this.subject$?.next(customer);
    }  , 1000);
  }

  stopCustomerEmission() {
    clearInterval(this.myInterval);
  }


}
