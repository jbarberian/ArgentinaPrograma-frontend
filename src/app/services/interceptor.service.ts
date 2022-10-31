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
    //var token = JSON.parse(sessionStorage.getItem("currentUser")!).jwttoken; //podria definirlo en el seriviio auth y llamarlo?
    //console.log("Interceptor: token: " + JSON.parse(token!).jwttoken);
    //console.log("Interceptor: token: " + token);

    if (currentUser && currentUser.accessToken)
    {
       req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }

      //headers: req.headers.append('Authorization', 'Bearer ' + token)


//        headers: req.headers.set('Authorization', 'Bearer ' + token)
  

    
                



          
        })
    }
    console.log("Serv. Interceptor esta corriendo " + JSON.stringify(currentUser));
    return next.handle(req);  
  }



}
