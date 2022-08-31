import { Component, inject } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { MySubjectService } from 'src/app/services/my-subject-service.service';
import { MySubjectComponentComponent } from '../my-subject-component/my-subject-component.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  service = inject(MySubjectService);
  lastCustomer: Customer | undefined = undefined;

  constructor() {
    this.service.customerObservable$?.subscribe(customer => this.lastCustomer = customer);
  }


}
