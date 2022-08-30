import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  myToken = 'XXXXX';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Sono nel primo interceptor');
    console.log(request);

    const myRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.myToken)
    });

    return next.handle(myRequest).pipe(
      map( (evento: HttpEvent<unknown>) => {
        if(evento instanceof HttpResponse) {
          console.log('Sono nella pipe del primo interceptor');
          console.log(evento);
        }
        return evento;
      })
    );
  }
}
