import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.ts';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  updateForm?: FormGroup;
  errorMessage?: string;
  successMessage?: string;

  patient?:Patient;
  constructor(public patientService:PatientService,public router:Router,public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.patientService.getPatientByEmail(localStorage.getItem('userEmail')).subscribe((data:Patient) => {
      console.log(data)
      this.patient=data
      this.updateForm = this.formBuilder.group({
        firstName: [this.patient.firstName, Validators.required],
        lastName: [this.patient.lastName, Validators.required],
        patientEmail: [this.patient.patientEmail, Validators.required],
        alternateEmail: [this.patient.alternateEmail],
        password:[this.patient.password],
        phoneNumber: [this.patient.phoneNumber, Validators.required],
        alternatePhoneNumber: [this.patient.alternatePhoneNumber],
        city:[this.patient.city],
        dateOfBirth: [this.patient.dateOfBirth],
        bloodGroup: [this.patient.bloodGroup],     
        patientWeight: [this.patient.patientWeight],
        patientHeight:[this.patient.patientHeight],
    })
    }, error =>{
      console.log("error came")
      this.errorMessage = error
    } 
    )
}

  updatePatient(){
    this.patientService.updatePatient(this.updateForm.value).subscribe(()=>{
    },error => this.errorMessage = error)
    this.patientService.getPatientByEmail(localStorage.getItem('userEmail')).subscribe((data:Patient) => {
    }, error =>{
      console.log("error came")
      this.errorMessage = error
    } 
    )
    this.router.navigate(['viewDetailsPage'])
  }
  
}
