import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css','../experience/experience.component.css', '../experience/add-experience.component.css']
})
export class AddSkillComponent implements OnInit {

  skName: string = "";
  skPercentage: string = "";

  constructor(private skServ: SkillService, private route: Router) { }

  ngOnInit(): void {
  }

   /* Create method: (C)*/
   createSkill(): void{
    const sk = new Skill(this.skName, this.skPercentage);
    length = this.skPercentage.length;
    
    // Add trailing % if not set by user
    if ( this.skPercentage.charAt(length - 1) != "%") {
      sk.setPercentage(this.skPercentage+"%");
    }
        
    this.skServ.createSkill(sk).subscribe(
      data => {
        alert("New Skill added.");
        this.route.navigate(['/main']);
      }, err => {
        alert("Error adding Skill");
        this.route.navigate(['/main'])
      }
    )
  }



}
