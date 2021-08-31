import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  errorMessage?: string;
  patientForm?: FormGroup;
  constructor(public patientService: PatientService, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      patientEmail: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dateOfBirth: [''],
      alternatePhoneNumber: [''],
      alternateEmail: [''],
      bloodGroup: ['']

    })
  }

  addPatient() {
    this.patientService.addPatient(this.patientForm.value).subscribe((
     
    ) => {
      
   

    }, error => this.errorMessage = error
    )
    this.router.navigate(['loginPage'])
  }

}
