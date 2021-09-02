import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './components/Patient-Components/appointment-form/appointment-form.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentSuccessComponent } from './components/Patient-Components/appointment-success/appointment-success.component';
import { PatientDashboardComponent } from './components/Patient-Components/patient-dashboard/patient-dashboard.component';
import { PatientLoginComponent } from './components/Patient-Components/patient-login/patient-login.component';
import { PatientRegisterComponent } from './components/Patient-Components/patient-register/patient-register.component';
import { ViewAccountComponent } from './components/Patient-Components/view-account/view-account.component';
import { UpdateAccountComponent } from './components/Patient-Components/update-account/update-account.component';
import { DoctorDashBoardComponent } from './components/Doctor-Components/doctor-dash-board/doctor-dash-board.component';
import { DoctorLoginComponent } from './components/Doctor-Components/doctor-login/doctor-login.component';
import { PatientBuyMedicinesComponent } from './components/Patient-Components/patient-buy-medicines/patient-buy-medicines.component';
import { PatientListComponent } from './components/Doctor-Components/patient-list/patient-list.component';

const routes: Routes = [
  {path:"registerPage" , component:PatientRegisterComponent},
  {path:"loginPage", component:PatientLoginComponent},
  {path:"" , component:HomeComponent},
  {path:"patientDashboard", component:PatientDashboardComponent},
  {path:"contactUsPage", component:ContactUsComponent},
  {path:"appointmentPage", component: AppointmentFormComponent},
  {path:"confirmPage", component:AppointmentSuccessComponent},
  {path:"viewDetailsPage", component: ViewAccountComponent},
  {path:"updatePatientPage",component: UpdateAccountComponent},
  {path:"doctorDashboard", component: DoctorDashBoardComponent},
  {path:"doctorLoginPage", component: DoctorLoginComponent},
  {path:"appointmentSuccess", component: AppointmentSuccessComponent},
  {path:"medicinePage", component: PatientBuyMedicinesComponent},
  {path:"patientListPage",component: PatientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
