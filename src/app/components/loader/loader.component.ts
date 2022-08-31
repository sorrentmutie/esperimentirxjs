import { Component, inject } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { LoaderService } from 'src/app/services/loader.service';
import { MySubjectService } from 'src/app/services/my-subject-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent  {

  status: boolean = false;
  customer: Customer | undefined = undefined;
  service=  inject(MySubjectService);
  loaderService = inject(LoaderService);
  constructor() {
    this.service.customerObservable$?.subscribe(customer => this.customer = customer);
    this.loaderService.loaderObservable$?.subscribe(
      status => {
        this.status = status;
      }
    )
  }


}
