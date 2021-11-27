import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

import {  passwordValidator, userNameValidator } from './validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  
  constructor(private authService:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.authService.logout();
    this.form = new FormGroup(
      {
        username: new FormControl(null, [userNameValidator()]),
        password: new FormControl(null, [passwordValidator()]),
      },
      []
    );
  }

  onLogin() {
    let username:string=this.form.value.username;
    let password:string=this.form.value.password;
    //console.log(username+" "+password);
    let result = this.authService.login(username, password)
    if (result) {//result === 
      console.log("After login successfull "+this.authService.isUserLoggedIn());
    
      alert("Login Successfull!")
      console.log(this.authService.isUserLoggedIn());
    //here login required to set flag or navigate to particular component
    this.router.navigate(['/doctors'])
  //  this.invalidLogin = false
    } else {
    alert("LoggedIn failed, try again!")
    }

  
}
}


