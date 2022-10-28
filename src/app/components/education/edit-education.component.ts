import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css', '../experience/experience.component.css', '../experience/add-experience.component.css']
})
export class EditEducationComponent implements OnInit {

  ed: Education = new Education("", "", "", "", "");

  constructor(private edServ: EducationService, private aRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.loadEducation();
  }

  getCurrentEducationID(): number {
    return this.aRoute.snapshot.params['id'];
  }

   /* Read method (R)*/
  loadEducation(): void {
    const id = this.getCurrentEducationID();
    this.edServ.findEducation(id).subscribe(
      data => {
        this.ed = data
      }, err => {
        alert("Error loading Education");
        this.route.navigate(['/main']);
      }
    )
  }

  /* Update method (U)*/
  updateEducation(): void {
    const id = this.getCurrentEducationID();
        
    this.edServ.updateEducation(id, this.ed).subscribe(
        data => {
          alert("Education updated.");
          this.route.navigate(['/main']);
        }, err => {
          alert("Error updating Education");
          this.route.navigate(['/main']);
        }
      );
  }

}
