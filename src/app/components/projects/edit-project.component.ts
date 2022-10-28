import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css', '../experience/experience.component.css', '../experience/add-experience.component.css']
})
export class EditProjectComponent implements OnInit {

  pj: Project = new Project("","","","","");

  constructor(private pjServ: ProjectService, private aRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.loadProject();
  }

  getCurrentProjectID(): number {
    return this.aRoute.snapshot.params['id'];
  }

  /* Read method (R)*/
  loadProject(): void {
    const id = this.getCurrentProjectID();
    this.pjServ.findProject(id).subscribe(
      data => {
        this.pj = data
      }, err => {
        alert("Error loading Project.");
        this.route.navigate(['main']);
      }
    )
  }

  /* Update method (U) */
  updateProject(): void {
    const id = this.getCurrentProjectID();

    this.pjServ.updateProject(id, this.pj).subscribe(
      data => {
        alert("Project updated.");
        this.route.navigate(['/main']);
      }, err => {
        alert("Error updating Project");
        this.route.navigate(['/main']);
      }
    )
  }
  
}
