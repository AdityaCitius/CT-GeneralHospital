import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule,NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  selectTitle:any;

  titles: string[] = ['Mr.', 'Ms.', 'Mrs.', 'Dr.'];
  regiForm!: FormGroup;

  constructor(private dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.regiForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.email]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      emailAddress: new FormControl(null,Validators.required)
    });
  }

  openPopup() {
    const popUp= this.dialog.open(PopUpComponent)
    popUp.afterClosed().subscribe(()=>{
    })
  } 


  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login'])

  }
  onSignup(){

  }
  onFormSubmit(regiForm:NgForm){
    console.log(regiForm);
  }

}
