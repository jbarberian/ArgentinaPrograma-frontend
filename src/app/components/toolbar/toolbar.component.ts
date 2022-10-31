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
    var currentUser = this.authServ.AuthUser;
    
    if (currentUser && currentUser.jwttoken){  
      this.isLogged = true;
    }
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('light');
  }

  logOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }
  
}
