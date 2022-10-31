import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isLogged = false;

  constructor(private pServ:PersonService, private authServ: AuthService){}

  p:Person = new Person("","","","","");
  
  ngOnInit(): void {
    
    var currentUser = this.authServ.AuthUser;

    if (currentUser && currentUser.jwttoken){  
      this.isLogged = true;
    }

    this.pServ.getPerson().subscribe(data => {this.p = data});
  }

}
