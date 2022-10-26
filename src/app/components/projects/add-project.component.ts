import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css', '../experience/experience.component.css', '../experience/add-experience.component.css']
})
export class AddProjectComponent implements OnInit {

  pjTitle:string = "";
  pjCompany:string = "";
  pjDatespan: string = "";
  pjDescription:string = "";
  pjAvatarURL:string = "";

  constructor(private pjServ: ProjectService, private route: Router) { }

  ngOnInit(): void {
  }

  /* Create method (C)*/
  createProject(): void{
    const pj = new Project(this.pjTitle, this.pjCompany, this.pjDatespan, this.pjDescription, this.pjAvatarURL);
    this.pjServ.createProject(pj).subscribe(
      data => {
        alert("New Project added.");
        this.route.navigate(['/main']);
      }, err => {
        alert("Error adding Project.");
        this.route.navigate(['/main']);
      }
    )

  }

}
