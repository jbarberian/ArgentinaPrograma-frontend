import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authServ: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.authServ.AuthUser;
    
    if (currentUser && currentUser.jwttoken)
    {
       req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.jwttoken}`
    }  
        })
    }
    //console.log("Serv. Interceptor esta corriendo " + JSON.stringify(currentUser));
    return next.handle(req);  
  }
}
