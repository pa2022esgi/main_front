import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpContextToken,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

export const BYPASS_AUTH = new HttpContextToken(() => false);

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router: Router) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers;

    if (request.context.get(BYPASS_AUTH) !== true) {
      headers = new HttpHeaders({
          'Authorization': `Bearer ${this.auth.user?.token}`,
          'Content-Type': 'application/json'
      });
    }else { 
      headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
    }

    request = request.clone({ headers });

    return next.handle(request).pipe(tap({
        next: (res: any) => {},
        error: () => {
            if (request.context.get(BYPASS_AUTH) !== true) {
                this.router.navigate(['/error']);
            }
        }
    }));
  }
}