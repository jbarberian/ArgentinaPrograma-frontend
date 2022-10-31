import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/education';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  //url="http://localhost:8080";
  url=environment.apiURL;

  constructor(private http:HttpClient){}

  /* Create method (C)*/
  public createEducation(ed: Education): Observable<any>{
    return this.http.post<any>(this.url+"/new/ed",ed);
  }
  
  /* Read methods (R)*/
  public findAllEducations(): Observable<Education[]>{
    return this.http.get<Education[]>(this.url+"/findall/ed");
  }

  public findEducation(id: number): Observable<Education>{
    return this.http.get<Education>(this.url+"/find/ed/"+id);
  }

  /* Update method (U)*/
  public  updateEducation(id: number, ed: Education): Observable<any>{
      return this.http.put<any>(this.url+"/update/ed/"+id, ed);
    }
    
  /* Delete method (D)*/
  public deleteEducation(id: number): Observable<any>{
    return this.http.delete<any>(this.url+"/delete/ed/"+id);
  }
  
}
