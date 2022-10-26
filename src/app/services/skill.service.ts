import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url="http://localhost:8080";

  constructor(private http:HttpClient){}

  /* Create method (C)*/
  public createSkill(sk: Skill): Observable<any>{
    return this.http.post<any>(this.url+"/new/sk",sk);
  }

  /* Read methods (R)*/
  public findAllSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url+"/findall/sk");
  }

  public findSkill(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.url+"/find/sk/"+id);
  }

  /* Update method (U)*/
  public  updateSkill(id: number, sk: Skill): Observable<any>{
    return this.http.put<any>(this.url+"/update/sk/"+id, sk);
  }

  /* Delete method (D)*/
  public deleteSkill(id: number): Observable<any>{
    return this.http.delete<any>(this.url+"/delete/sk/"+id);
  }
  
}
