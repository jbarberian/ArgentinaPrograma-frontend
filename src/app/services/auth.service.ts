import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url=environment.apiURL;
  
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    //console.log("El servicio de auth esta corriendo.")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }

  login(credentials: any): Observable<any>
  {
    return this.http.post(this.url + "/login", credentials).pipe(map(
      data => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      }
    ))
  }

  get AuthUser()
  {
    return this.currentUserSubject.value;
  }
}
