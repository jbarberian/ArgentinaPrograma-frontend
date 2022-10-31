import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLogged = false;

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    var token = sessionStorage.getItem("currentUser");

    if (token){  
      this.isLogged = true;
      console.log(this.isLogged);
    }
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('light');
  }

  logOut(): void {
    console.log("logOut executed");
    window.sessionStorage.clear();
    window.location.reload();
  }
  
}
