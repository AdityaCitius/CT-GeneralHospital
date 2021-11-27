import { Injectable } from '@angular/core';
import { GlobalVariable } from '../Enum/globleVariables';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string,password:string):boolean
  {
    //username==GlobalVariable.Username && password==GlobalVariable.Password
      if(true)
      {
          sessionStorage.setItem('authenticaterUser', username);
          console.log(sessionStorage.getItem('authenticaterUser'));
          return true;
      }else{
          return false;
      }
     
  }

  signup(email:String,password:string):boolean
  {
      return true;
  }

  isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticaterUser')
      console.log("Is user logggIn "+user) 
      return !(user === null)
    }
  
    getUserLoggedInName() {
      let user = sessionStorage.getItem('authenticaterUser')
      return user 
    }

    logout(){
      console.log("session cleared")
      sessionStorage.removeItem('authenticaterUser')
    }
}
