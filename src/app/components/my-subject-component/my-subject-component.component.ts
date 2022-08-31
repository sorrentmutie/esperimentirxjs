import { Component, inject } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { MySubjectService } from 'src/app/services/my-subject-service.service';

@Component({
  selector: 'app-my-subject-component',
  templateUrl: './my-subject-component.component.html',
  styleUrls: ['./my-subject-component.component.css']
})
export class MySubjectComponentComponent  {

  customers: Customer[] = [];
  service = inject(MySubjectService);

  constructor(){
    this.service.customerObservable$?.subscribe( customer => {
      this.customers.push(customer);
    });
  }

  iniziaEmissione() {
    this.service.startCustomerEmission();
  }

  fermaEmissione() {
    this.service.stopCustomerEmission();
  }


}
