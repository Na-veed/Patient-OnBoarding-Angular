import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  constructor(public patientService:PatientService,public formBuilder:FormBuilder,public router:Router) { }

  patientLoginForm?: FormGroup;
  errorMessage?: string;
  

  ngOnInit(): void {
    this.patientLoginForm = this.formBuilder.group({
      patientEmail: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  loginPatient(){
    this.patientService.loginPatient(this.patientLoginForm.get('patientEmail').value,this.patientLoginForm.get('password').value).subscribe(() => {

    },error=>this.errorMessage = error,
    )
    this.navigate();
  }

  navigate(){
    this.router.navigate(['patientDashboard'])
  }

}
