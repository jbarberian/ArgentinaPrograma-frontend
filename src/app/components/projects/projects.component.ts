import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../experience/experience.component.css']
})
export class ProjectsComponent implements OnInit {

  isLogged = false;

  constructor(private pjServ: ProjectService, private authServ: AuthService){}

  pj: Project[] = [];

  ngOnInit(): void {
    
    var currentUser = this.authServ.AuthUser;

    if (currentUser && currentUser.jwttoken){  
      this.isLogged = true;
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
