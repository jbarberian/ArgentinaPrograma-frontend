import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./experience.component.css','./add-experience.component.css','./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  xp: Experience = new Experience("", "", "", "", "", "");

  constructor(private xpServ: ExperienceService, private aRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    //console.log("Running loadExperience");
    this.loadExperience();
    //console.log(this.xp);
  }

  getCurrentExperienceID(): number {
    return this.aRoute.snapshot.params['id'];
  }

  /* Read method (R)*/
  loadExperience(): void{
    const id = this.getCurrentExperienceID();
    //console.log("loadExperience: id: " + id);
    
    this.xpServ.findExperience(id).subscribe(
      data => {
        this.xp = data
      }, err => {
        alert("Error loading experience");
        this.route.navigate(['/main']);
      });

    //console.log("Title" + this.xp.title);
    
  }

  /* Update method (U)*/
  updateExperience(): void{
    //console.log("updateExperience running...")
    const id = this.getCurrentExperienceID();
    //console.log("id: " + id);

    this.xpServ.updateExperience(id, this.xp).subscribe(
        data => {
          //console.log(this.xp);
          alert("Experience updated.");
          this.route.navigate(['/main']);
        }, err => {
          //console.log(this.xp);
          alert("Error updating Experience");
          this.route.navigate(['/main']);
        }
      );
  }

}
