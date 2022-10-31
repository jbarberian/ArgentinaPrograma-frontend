import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url=environment.apiURL;

  constructor(private http:HttpClient){}

  /* Read method (R)*/
  public getPerson(): Observable<Person>{
    return this.http.get<Person>(this.url+"/find/p/1");
  }

  /* Update method (U)*/
  public updatePerson(p: Person): Observable<any>{
    return this.http.put<any>(this.url+"/update/p/1", p);
  } 
  
}
