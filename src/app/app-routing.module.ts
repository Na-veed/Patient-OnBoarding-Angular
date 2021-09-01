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

const routes: Routes = [
  {path:"registerPage" , component:PatientRegisterComponent},
  {path:"loginPage", component:PatientLoginComponent},
  {path:"" , component:HomeComponent},
  {path:"patientDashboard", component:PatientDashboardComponent},
  {path:"contactUsPage", component:ContactUsComponent},
  {path:"appointmentPage", component: AppointmentFormComponent},
  {path:"confirmPage", component:AppointmentSuccessComponent},
  {path:"viewDetailsPage",component:ViewAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
