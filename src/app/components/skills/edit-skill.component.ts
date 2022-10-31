import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css','../experience/experience.component.css', '../experience/add-experience.component.css']
})
export class EditSkillComponent implements OnInit {

  sk: Skill = new Skill("", "");

  constructor(private skServ: SkillService, private aRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.loadSkill();
  }

  getCurrentSkillID(): number {
    return this.aRoute.snapshot.params['id'];
  }

  /* Read method (R)*/
  loadSkill(): void{
    const id = this.getCurrentSkillID();
        
    this.skServ.findSkill(id).subscribe(
      data => {
        this.sk = data
      }, err => {
        alert("Error loading Skill");
        this.route.navigate(['/main']);
      });
  }

  /* Update method (U)*/
  updateSkill(): void{
    const id = this.getCurrentSkillID();

    // Add trailing % if not set by user
    //if ( this.sk.percentage.charAt(length - 1) != "%") {
    //  this.sk.percentage = this.sk.percentage + "%";
    //}
    this.sk.percentage = this.sk.percentage.replace(/%/g,"") + "%";
    
    this.skServ.updateSkill(id, this.sk).subscribe(
        data => {
          alert("Skill updated.");
          this.route.navigate(['/main']);
        }, err => {
          alert("Error updating Skill");
          this.route.navigate(['/main']);
        }
      );
  }





}
