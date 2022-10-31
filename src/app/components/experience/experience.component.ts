import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  isLogged = false;

  constructor(private xpServ: ExperienceService){}

  xp: Experience[] = [];
  dnd = false;


  ngOnInit(): void {
    var token = sessionStorage.getItem("currentUser");

    if (token){  
      this.isLogged = true;
      console.log(this.isLogged);
    }
    
    this.loadExperiences();
  }

  /* Read method (R)*/
  loadExperiences(): void{
    this.xpServ.findAllExperiences().subscribe(data => {this.xp = data});
  }

  /* Delete method (D)*/
  deleteExperience(id?:number){
    if (id != undefined && confirm("Are you sure you want to delete experience?")){
      this.xpServ.deleteExperience(id).subscribe(
        data => {
          this.loadExperiences()
        }, 
        err => {
          console.log(this.loadExperiences());
          alert("Error deleting experience")
        }
      )
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    /*if (event.previousContainer === event.container) {*/
      /*console.log("event.previousIndex: "+event.previousIndex);
      console.log("event.currentIndex: "+event.currentIndex);*/
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    /*} /*else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }*/
  }

  toggleDnD(){
    //console.log("dnd: " + this.dnd);
    this.dnd = !this.dnd;
  }
}
