import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css', '../experience/experience.component.css', '../experience/add-experience.component.css']
})
export class EditAboutComponent implements OnInit {

  p: Person = new Person("", "", "", "", "");

  constructor(private pServ: PersonService, private aRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.loadPerson();
  }

  //getCurrentPersonID(): number {
  //  return this.aRoute.snapshot.params['id'];
  //}

  /* Read method (R)*/
  loadPerson(): void {
    this.pServ.getPerson().subscribe(
      data => {
        this.p = data
      }, err => {
        alert("Error loading Person.");
        this.route.navigate(['/main']);
      }
    )
  }

  /* Update method (U) */
  updatePerson(): void {
    this.pServ.updatePerson(this.p).subscribe(
      data => {
        alert("About updated.");
        this.route.navigate(['/main']);
      }, err => {
        alert("Error updating About.");
        this.route.navigate(['/main']);
      }
    )

  }
  
}
