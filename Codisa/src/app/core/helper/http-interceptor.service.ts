import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // let token: string = "";

    // var infoAuthorization = utiles.getCacheObject("infoSecurityBudget");

    /* if(infoAuthorization != undefined)
       token = infoAuthorization.value;
   
     if (token) {
       req = req.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
     }*/

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        // this.errorDialogService._openDialog(error);
        return throwError(error);
      }));



    //   throw new Error('Method not implemented.');
  }
}
