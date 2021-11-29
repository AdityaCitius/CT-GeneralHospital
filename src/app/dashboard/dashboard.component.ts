import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dialog: MatDialog,private router:Router){ }

  ngOnInit(): void {
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
}
