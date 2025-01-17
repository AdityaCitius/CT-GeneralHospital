import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog,private router:Router) { }
  flag = false;
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
