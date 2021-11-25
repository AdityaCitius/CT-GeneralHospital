import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegistrationComponent } from './registration/registration.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';


const routes:Routes = [
  {
    path:'appoinment',
    component:AppoinmentComponent
  },
  {
    path:'my-profile',
    component:MyProfileComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  }
]

@NgModule({
  declarations: [
    AppoinmentComponent,
    MyProfileComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorModule { }
