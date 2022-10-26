import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url="http://localhost:8080";

  constructor(private http:HttpClient){}

  getPerson(): Observable<Person>{
    return this.http.get<Person>(this.url+"/find/p/1");
  }
}
