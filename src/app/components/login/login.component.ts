import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../experience/experience.component.css', '../experience/add-experience.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder, private authServ: AuthService, private route: Router) {
    this.form=this.builder.group(
      {
        username: ['', [Validators.required, Validators.minLength(7)]],
        password: ['', [Validators.required, Validators.minLength(7)]]
    })
   }

  ngOnInit(): void {
  }

  get Username(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password');
  }

  onSubmit(event: Event)
  {
    event.preventDefault;
    this.authServ.login(this.form.value).subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.route.navigate(['/main']);
    }, err => {
      alert("Error loggin in.");
      this.route.navigate(['/main'])
    })
  }

}
