import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css', '../experience/experience.component.css', '../experience/add-experience.component.css']
})
export class AddEducationComponent implements OnInit {

  edTitle: string = "";
  edCompany: string = "";
  edDatespan: string = "";
  edDescription: string = "";
  edAvatarURL: string = "";

  constructor(private edServ: EducationService, private route: Router) { }

  ngOnInit(): void {
  }

   /* Create method: (C)*/
   createEducation(): void{
    const ed = new Education(this.edTitle, this.edCompany, this.edDatespan, this.edDescription, this.edAvatarURL);
    this.edServ.createEducation(ed).subscribe(
      data => {
        alert("New Education added.");
        this.route.navigate(['/main']);
      }, err => {
        alert("Error adding Education");
        this.route.navigate(['/main'])
      }
    )
  }

}
