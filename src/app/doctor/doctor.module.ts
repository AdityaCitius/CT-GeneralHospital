import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegistrationComponent } from './registration/registration.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormField } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//import { PopupComponent } from './popup/popup.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

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
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    FormsModule,
    MatListModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorModule { }
