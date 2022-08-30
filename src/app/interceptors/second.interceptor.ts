import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap, map, delay, catchError, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.showLoader();
    console.log('Sono nel secondo interceptor');
    console.log(request);

    const myRequest = request.clone({
      headers: request.headers.append('Content-Type', 'application/myjson')
    });

    return next.handle(myRequest).pipe(
      map( evento => {
        if(evento instanceof HttpResponse) {
          console.log('Sono nella pipe del secondo interceptor');
          console.log(evento);
          this.loaderService.hideLoader();
        }
        return evento;
      }),
      catchError(  (errore: HttpErrorResponse) => {
          console.log("Sono nel catchError");
          console.log(errore);
          console.log('Sto uscendo dal catchError');
          if(errore.status === 0) {
            console.log('Status 0');
          } else if( errore.status === 404) {
            console.log('Status 404');
          }
          return throwError(() => new Error('Mio Errore'));
      })
    );
  }
}
