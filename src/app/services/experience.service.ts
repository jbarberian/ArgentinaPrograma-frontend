import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url="http://localhost:8080";
  //url=environment.apiURL;

  constructor(private http:HttpClient){}

  /* Create method (C)*/
  public createExperience(xp: Experience): Observable<any>{
    return this.http.post<any>(this.url+"/new/xp",xp);
  }

  /* Read methods (R)*/
  public findAllExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.url+"/findall/xp");
  }

  public findExperience(id: number): Observable<Experience>{
    return this.http.get<Experience>(this.url+"/find/xp/"+id);
    //return this.http.get<Experience>(this.URL+`/find/xp/${id}`);
  }

  /* Update method (U)*/
  public  updateExperience(id: number, xp: Experience): Observable<any>{
    /*console.log("Experience Service: updateExperience running...");
    console.log("id: "+ id);
    console.log("xp: " + xp.title);
    console.log("xp: " + xp.company);
    console.log("xp: " + xp.fromdate);
    console.log("xp: " + xp.todate);
    console.log("xp: " + xp.description);
    console.log("xp: " + xp.avatarURL);
    console.log(this.url+"/update/xp/"+id);*/
    return this.http.put<any>(this.url+"/update/xp/"+id, xp);
  }

  /* Delete method (D)*/
  public deleteExperience(id: number): Observable<any>{
    return this.http.delete<any>(this.url+"/delete/xp/"+id);
  }

  
  /*
  public findExperience(id: number): Observable<Experience>{
    return this.http.get<Experience>(this.URL+"/find/xp/"+id);
    //return this.http.get<Experience>(this.URL+`/find/xp/${id}`);
  }

  public  updateExperience(id: number, xp: Experience): Observable<any>{
    return this.http.put<any>(this.xpURL+"/update/p/"+id, xp);
  }

  public deleteExperience(id: number): Observable<any>{
    return this.http.delete<any>(this.xpURL+"/delete/xp"+id);
  }
  */







}
