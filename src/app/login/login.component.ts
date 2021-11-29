import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = '1';
  username: any;
  password: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.setItem('Sessionuser', this.user);
  }

  checklogin() {
    let uname = this.username;
   // console.log("uname"+uname);
    
    sessionStorage.setItem('isLogin', 'true');
    sessionStorage.setItem('loginsuccess','true');
    this.router.navigate(['/home']);
   }
    logout(){
       sessionStorage.clear();
       this.router.navigate(['/login'])
  
     }
}
