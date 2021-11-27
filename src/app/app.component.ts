import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PopUpComponent } from './pop-up/pop-up.component';
import { AuthService } from './Services/auth.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  percentage : number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',percentage:71},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',percentage:65},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',percentage:29},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',percentage:20},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',percentage:78},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',percentage:45},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',percentage:60},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',percentage:20},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',percentage:40},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',percentage:30},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyl-project';
  searchStr : string ='';
  options : String[] = ["mobile","laptop"];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','percentage'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  headerfloatflag:boolean = false;
  constructor(private cd:ChangeDetectorRef,private dialog: MatDialog,public authService:AuthService,private router:Router) {
    
   
  }
  onNgInit(){
   this.headerfloatflag=this.authService.isUserLoggedIn();
   //console.log(this.headerfloatflag);
  }
   openPopup() {
    const popUp= this.dialog.open(PopUpComponent)
    popUp.afterClosed().subscribe(()=>{
    })
  }
  onSearch(){
    this.dataSource.filter = this.searchStr;
    
  }
  logout()
  {
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/login'])
  }
//   ngAfterViewChecked(){
//     //your code to update the model
//     this.cd.detectChanges();
//  }
}
