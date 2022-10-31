import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  //url="http://localhost:8080";
  url=environment.apiURL;

  constructor(private http:HttpClient){}

  /* Create method (C)*/
  public createProject(pj: Project): Observable<any>{
    return this.http.post<any>(this.url+"/new/pj",pj);
  }

  /* Read methods (R)*/
  public findAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.url+"/findall/pj");
  }

  public findProject(id: number): Observable<Project>{
    return this.http.get<Project>(this.url+"/find/pj/"+id);
  }

  /* Update method (U)*/
  public updateProject(id: number, pj: Project): Observable<any>{
    return this.http.put<any>(this.url+"/update/pj/"+id, pj);
  }

  /* Delete method (D)*/
  public deleteProject(id: number): Observable<any>{
    return this.http.delete<any>(this.url+"/delete/pj/"+id);
  }

  //public getProjects(): Observable <Project[]>{
  //  return this.http.get<Project[]>(this.url+"/findall/pj")
  //}
}
