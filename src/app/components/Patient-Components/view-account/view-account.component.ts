import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient.ts';
import { PatientService } from 'src/app/services/patient.service';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {
  errorMessage?:string
  email?:string
  patient:Patient

  firstName?:string;
  lastName?:string;
  patientEmail?:string;
  dateOfBirth?:Date;
  city?:string;
  phoneNumber?:number;
  alternatePhoneNumber?:number;

  constructor(public patientService:PatientService,public router:Router) { }

  ngOnInit(): void {
    this.firstName = "Naveed"
    console.log("entered"+PatientLoginComponent.userEmail)
      this.patientService.getPatientByEmail("sheshettipavansai969@gmail.com").subscribe((data:Patient) => {
        console.log(data)
        // console.log(this.patientLoginComponent.userEmail)
        this.patient=data
      }, error =>{
        console.log("error came")
        this.errorMessage = error
      } 
      )

}
updatePatient(){
  this.router.navigate(['updatePatientPage'])
}

deletePatient(){
  this.router.navigate(['deletePatientPage'])
}
}