import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lazyl-project';
  searchStr: string = '';
  options: String[] = ['mobile', 'laptop'];
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'percentage',
  ];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  checkIn: boolean = true;
  aftersuccess:boolean = false;

  constructor(private dialog: MatDialog,private route:Router) {
    if (sessionStorage.getItem('isLogin'))  {
      this.checkIn = false;
      this.aftersuccess = true;
    } else {
      this.checkIn = true;
    }
  }
  //headerfloatflag:boolean = true;
  //  openPopup() {
  //   const popUp= this.dialog.open(PopUpComponent)
  //   popUp.afterClosed().subscribe(()=>{
  //   })
  // }

  logout(){
    sessionStorage.clear();
    this.route.navigate(['/login'])

  }
}
