import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./experience.component.css','./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  xpTitle: string = "";
  xpCompany: string = "";
  xpFromdate: string = "";
  xpTodate: string = "";
  xpDescription: string = "";
  xpAvatarURL: string = "";

  constructor(private xpServ: ExperienceService, private route: Router){}

  ngOnInit(): void {
  }

  /* Create method: (C)*/
  createExperience(): void{
    const xp = new Experience(this.xpTitle, this.xpCompany, this.xpFromdate, this.xpTodate, this.xpDescription, this.xpAvatarURL);
    this.xpServ.createExperience(xp).subscribe(
      data => {
        alert("New Experience added.");
        this.route.navigate(['/main']);
      }, err => {
        console.log(xp);
        alert("Error adding Experience");
        this.route.navigate(['/main'])
      }
    )
  }
}
