import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isLogged = false;

  constructor(private pServ:PersonService){}

  p:Person = new Person("","","","","");

  ngOnInit(): void {
    var token = sessionStorage.getItem("currentUser");

    if (token){  
      this.isLogged = true;
      console.log(this.isLogged);
    }

    this.pServ.getPerson().subscribe(data => {this.p = data});
  }

}
