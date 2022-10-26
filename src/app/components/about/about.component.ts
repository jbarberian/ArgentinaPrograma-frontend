import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private pServ:PersonService){}

  p:Person = new Person("","","","","");

  ngOnInit(): void {
    this.pServ.getPerson().subscribe(data => {this.p = data});
  }

}
