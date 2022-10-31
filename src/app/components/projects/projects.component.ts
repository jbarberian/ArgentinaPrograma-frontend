import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../experience/experience.component.css']
})
export class ProjectsComponent implements OnInit {

  isLogged = false;

  constructor(private pjServ: ProjectService){}

  pj: Project[] = [];

  ngOnInit(): void {
    var token = sessionStorage.getItem("currentUser");

    if (token){  
      this.isLogged = true;
      console.log(this.isLogged);
    }
    
    this.loadProjects();
  }

  /* Read method (R)*/
  loadProjects(): void{
    this.pjServ.findAllProjects().subscribe(data => {this.pj = data});
  }

  /* Delete method (D)*/
  deleteProject(id?:number){
    if (id !=undefined && confirm("Are you sure you want to delete this Project?")){
      this.pjServ.deleteProject(id).subscribe(
        data => {
          this.loadProjects()
        },
        err => {
          console.log(this.loadProjects());
          alert("Error deleting Project")
        }
      )
    }
  }



}
