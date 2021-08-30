import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PatientDashboardComponent } from './components/Patient-Components/patient-dashboard/patient-dashboard.component';
import { PatientLoginComponent } from './components/Patient-Components/patient-login/patient-login.component';
import { PatientRegisterComponent } from './components/Patient-Components/patient-register/patient-register.component';

const routes: Routes = [
  {path:"registerPage" , component:PatientRegisterComponent},
  {path:"loginPage", component:PatientLoginComponent},
  {path:"" , component:HomeComponent},
  {path:"patientDashboard", component:PatientDashboardComponent},
  {path:"contactUsPage", component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
