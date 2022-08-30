import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-eroe-form-reattivo',
  templateUrl: './eroe-form-reattivo.component.html',
  styleUrls: ['./eroe-form-reattivo.component.css']
})
export class EroeFormReattivoComponent implements OnDestroy {

 // valoreInput: Observable<string | null> | null = null;
  mySubscription : Subscription | undefined = undefined;
  myInputControl = new FormControl('valore iniziale');

  constructor() {
  //   this.valoreInput = this.myInputControl.valueChanges;
  this.mySubscription =  this.myInputControl.valueChanges.subscribe( (valore: string | null) => {
    if(valore && valore.length > 10) {
      console.log('Allarme');
      this.myInputControl.setValue('Reset');
    }
  });
  }
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }

}
