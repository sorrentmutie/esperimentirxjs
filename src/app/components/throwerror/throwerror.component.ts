import { Component, inject } from '@angular/core';
import { catchError, from, map, of, throwError, retry } from 'rxjs';
import { onErrorResumeNext } from 'rxjs/operators';
import { RandomUsersService } from 'src/app/services/random-users.service';

@Component({
  selector: 'app-throwerror',
  templateUrl: './throwerror.component.html',
  styleUrls: ['./throwerror.component.css']
})
export class ThrowerrorComponent  {

  // myobs = throwError(() => new Error("errore test"));

  // myservice = inject(RandomUsersService);

  mysrc = from([1,2,'A',4]);

  constructor(){
    // this.myobs.subscribe(
    //   el => console.log('Ricevuto dato'),
    //   err => console.log('Errore intercettato: ' + err.message),
    //   () => console.log('Processamento completo')
    // );

    this.mysrc.pipe(
      map(valore => {
         const result = valore as number * 2;
         if(Number.isNaN(result)) {
          console.log('Errore nello stream');
          throw new Error('Il risultato è NaN');
         }
         return result;
      }),
      retry(3),
      catchError( errore => {
        console.log('Sono nel catch error della pipe');
         return of(-1);
        //throw new Error(errore);
      })



      )
    .subscribe(
      x => console.log(x),
      errore => console.log('Gestione errore nel subscribe: ' + errore.message),
      () => console.log('Trasmissione completata'));

  }
}
