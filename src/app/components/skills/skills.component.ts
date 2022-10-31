import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../experience/experience.component.css','./skills.component.css']
})
export class SkillsComponent implements OnInit {

  isLogged = false;

  constructor(private skServ: SkillService, private authServ: AuthService){}

  sk: Skill[] = [];

  ngOnInit(): void {
    
    var currentUser = this.authServ.AuthUser;

    if (currentUser && currentUser.jwttoken){  
      this.isLogged = true;
    }
    
    this.loadSkills();
  }

  loadSkills(): void {
    this.skServ.findAllSkills().subscribe(data => {this.sk = data});
  }

  deleteSkill(id?:number){
    if (id != undefined && confirm("Are you sure you want to delete this Skill?")){
      this.skServ.deleteSkill(id).subscribe(
        data => {
          this.loadSkills()
        }, 
        err => {
          console.log(this.loadSkills());
          alert("Error deleting Skill")
        }
      )
    }
  }





}
