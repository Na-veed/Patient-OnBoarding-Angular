import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.ts';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  appointmentForm?:FormGroup;
  errorMessage?: string;
  patient?:Patient
  
  constructor(public appointmentService:AppointmentService, public formBuilder:FormBuilder, public router: Router, public patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatientByEmail(localStorage.getItem('userEmail')).subscribe((data:Patient) => {
    this.patient = data
    this.appointmentForm = this.formBuilder.group({
      patientEmail: [this.patient.patientEmail,Validators.required],
      specializationId: [''],
      symptoms: [''],
      doctorId: [''],
      consultingType: ['',Validators.required],
      appointmentStatus: ["pending"]
    })
  },error =>{
    console.log("error occured")
    this.errorMessage = error ;
    
  })
  
  }

  addAppointment(){
    this.appointmentService.addAppointment(this.appointmentForm.value).subscribe(()=>{
    },error => this.errorMessage = error)
      this.patientService.getPatientByEmail(localStorage.getItem('userEmail')).subscribe((data:Patient)=>{

      },error =>{
        console.log("error occured")
        this.errorMessage = error
      })
    this.router.navigate(['appointmentSuccess'])
  
}




  
}
