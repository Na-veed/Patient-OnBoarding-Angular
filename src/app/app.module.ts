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
import { AppointmentFormComponent } from './components/Patient-Components/appointment-form/appointment-form.component';
import { AdminLoginComponent } from './components/Admin-Components/admin-login/admin-login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DoctorAppointmentDetailsComponent } from './components/Doctor-Components/doctor-appointment-details/doctor-appointment-details.component';
import { DoctorLoginComponent } from './components/Doctor-Components/doctor-login/doctor-login.component';
import { ViewAccountComponent } from './components/Patient-Components/view-account/view-account.component';
import { AppointmentSuccessComponent } from './components/Patient-Components/appointment-success/appointment-success.component';
import { DoctorDashBoardComponent } from './components/Doctor-Components/doctor-dash-board/doctor-dash-board.component';
import { PatientListComponent } from './components/Doctor-Components/patient-list/patient-list.component';
import { PatientByEmailComponent } from './components/Doctor-Components/patient-by-email/patient-by-email.component';
import { UpdateAccountComponent } from './components/Patient-Components/update-account/update-account.component';
import { PatientBuyMedicinesComponent } from './components/Patient-Components/patient-buy-medicines/patient-buy-medicines.component';
import { DoctorListComponent } from './components/Admin-Components/doctor-list/doctor-list.component';
import { AppointmentListComponent } from './components/Admin-Components/appointment-list/appointment-list.component';
import { AdminDashboardComponent } from './components/Admin-Components/admin-dashboard/admin-dashboard.component';
import { AdminPatientListComponent } from './components/Admin-Components/admin-patient-list/admin-patient-list.component';
import { AdminDoctorListComponent } from './components/Admin-Components/admin-doctor-list/admin-doctor-list.component';
import { DoctorRegisterComponent } from './components/Doctor-Components/register-doctor/register-doctor.component';
import { AddMedicineComponent } from './components/Doctor-Components/add-medicine/add-medicine.component';
import { MedicineSuccessComponent } from './components/Patient-Components/medicine-success/medicine-success.component';
import { AdminMedicineListComponent } from './components/Admin-Components/admin-medicine-list/admin-medicine-list.component';
import { LogoutComponentComponent } from './components/logout-component/logout-component.component';




@NgModule({
  declarations: [
    AppComponent,
    PatientRegisterComponent,
    HomeComponent,
    PatientLoginComponent,
    PatientDashboardComponent,
    ContactUsComponent,
    AppointmentFormComponent,
    AdminLoginComponent,
    AboutUsComponent,
    DoctorAppointmentDetailsComponent,
    DoctorLoginComponent,
    ViewAccountComponent,
    AppointmentSuccessComponent,
    DoctorDashBoardComponent,
    PatientListComponent,
    PatientByEmailComponent,
    UpdateAccountComponent,
    PatientBuyMedicinesComponent,
    DoctorListComponent,
    AppointmentListComponent,
    AdminDashboardComponent,
    AdminPatientListComponent,
    AdminDoctorListComponent,
    DoctorRegisterComponent,
    AddMedicineComponent,
    MedicineSuccessComponent,
    AdminMedicineListComponent,
    LogoutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PatientLoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
