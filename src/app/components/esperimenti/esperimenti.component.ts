import { Component } from '@angular/core';

@Component({
  selector: 'app-esperimenti',
  templateUrl: './esperimenti.component.html',
  styleUrls: ['./esperimenti.component.css']
})
export class EsperimentiComponent  {

    onKey(payload: string): void {
      //  console.log(payload.target.value);
     // const myInput = payload?.target as HTMLInputElement;
      console.log(payload);
    }

}
