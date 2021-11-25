import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'my-profile',
    component:MyProfileComponent
  },
  {
    path:'visit-history',
    component:VisitHistoryComponent
  }
]

@NgModule({
  declarations: [
    MyProfileComponent,
    VisitHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientsModule { }
