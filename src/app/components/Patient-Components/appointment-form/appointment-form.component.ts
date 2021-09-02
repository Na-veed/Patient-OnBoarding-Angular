import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.ts';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  appointmentForm?:FormGroup;
  errorMessage?: string;
  constructor(public patientService:PatientService, public formBuilder:FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      patientEmail: ['',Validators.required],
      specialists: [''],
      symptoms: [''],
      consultingType: ['',Validators.required],
    })
  }

  addAppointment(){
    this.patientService.addAppointment(this.appointmentForm.value).subscribe(()=>{
      //we have to navigate to success page with router
      this.router.navigate(['appointmentSuccess'])
    },error =>this.errorMessage = error)
  
}


  
}
