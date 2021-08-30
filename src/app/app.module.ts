import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientRegisterComponent } from './components/Patient-Components/patient-register/patient-register.component';
import { HomeComponent } from './components/home/home.component';
import { PatientLoginComponent } from './components/Patient-Components/patient-login/patient-login.component';
import { PatientDashboardComponent } from './components/Patient-Components/patient-dashboard/patient-dashboard.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AdminGetAppointmentsComponent } from './components/Admin-Components/admin-get-appointments/admin-get-appointments.component';
import { AdminLoginComponent } from './components/Admin-Components/admin-login/admin-login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DoctorAppointmentDetailsComponent } from './components/Doctor-Components/doctor-appointment-details/doctor-appointment-details.component';
import { DoctorLoginComponent } from './components/Doctor-Components/doctor-login/doctor-login.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientRegisterComponent,
    HomeComponent,
    PatientLoginComponent,
    PatientDashboardComponent,
    ContactUsComponent,
    AppointmentFormComponent,
    AdminGetAppointmentsComponent,
    AdminLoginComponent,
    AboutUsComponent,
    DoctorAppointmentDetailsComponent,
    DoctorLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
