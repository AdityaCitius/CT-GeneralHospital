import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//import { PopupComponent } from './popup/popup.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';
import {MatRadioModule} from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardServiceService } from './Services/authguard-service.service';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
    path: '',redirectTo:"/login",pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:DashboardComponent,canActivate:[AuthenticationGuard]
  },
  {
    path: 'registration_patient',
    component:RegistrationPatientComponent
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./doctor/doctor.module').then((m) => m.DoctorModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./patients/patients.module').then((m) => m.PatientsModule),
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, RegistrationPatientComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    ReactiveFormsModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ 
    AuthguardServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
