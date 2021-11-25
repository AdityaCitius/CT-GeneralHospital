import { Injectable } from '@angular/core';
import { GlobalVariable } from '../Enum/globleVariables';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string,password:string):boolean
  {
      if(username==GlobalVariable.Username && password==GlobalVariable.Password)
      {
          sessionStorage.setItem('authenticaterUser', username);
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
      return !(user === null)
    }
  
    logout(){
      sessionStorage.removeItem('authenticaterUser')
    }
}
