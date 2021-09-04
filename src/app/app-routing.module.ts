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
import { AdminPatientListComponent } from './components/Admin-Components/admin-patient-list/admin-patient-list.component';
import { AppointmentListComponent } from './components/Admin-Components/appointment-list/appointment-list.component';
import { DoctorListComponent } from './components/Admin-Components/doctor-list/doctor-list.component';
import { AdminDashboardComponent } from './components/Admin-Components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/Admin-Components/admin-login/admin-login.component';
import { ViewAccountComponentOfDoctor } from './components/Doctor-Components/view-account/view-account.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path:"registerPage" , component:PatientRegisterComponent},
  {path:"loginPage", component:PatientLoginComponent},
  {path:"" , component:HomeComponent},
  {path:"aboutUsPage", component:AboutUsComponent},
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
  {path:"patientListPage",component: PatientListComponent},
  {path:"AdminPatientListPage", component: AdminPatientListComponent},
  {path: "appointmentListPage", component:AppointmentListComponent},
  {path: "DoctorListPage", component:DoctorListComponent},
  {path: "adminDashboard", component:AdminDashboardComponent},
  {path: "adminLoginPage", component:AdminLoginComponent},
  {path:"doctorDetails",component:ViewAccountComponentOfDoctor}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
