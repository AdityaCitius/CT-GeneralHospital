import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPatientComponent } from './registration-patient/registration-patient.component';

const routes: Routes = [
  // {
  //   path: 'registration_patient',
  //   component:RegistrationPatientComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
