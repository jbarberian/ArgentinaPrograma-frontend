import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['../experience/experience.component.css']
})
export class EducationComponent implements OnInit {

  isLogged = false;

  constructor(private edServ: EducationService){}

  ed: Education[] = [];

  ngOnInit(): void {
    var token = sessionStorage.getItem("currentUser");

    if (token){  
      this.isLogged = true;
      console.log(this.isLogged);
    }

    this.loadEducations();
  }

  /* Read method (R)*/
  loadEducations(): void{
    this.edServ.findAllEducations().subscribe(data => {this.ed = data});
  }

  /* Delete method (D)*/
  deleteEducation(id?:number){
    if (id != undefined && confirm("Are you sure you want to delete this Education?")){
      this.edServ.deleteEducation(id).subscribe(
        data => {
          this.loadEducations()
        }, 
        err => {
          console.log(this.loadEducations());
          alert("Error deleting Education")
        }
      )
    }
  }

}
