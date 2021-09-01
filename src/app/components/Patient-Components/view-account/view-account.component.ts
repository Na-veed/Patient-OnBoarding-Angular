import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient.ts';
import { PatientService } from 'src/app/services/patient.service';
import { PatientLoginComponent } from '../patient-login/patient-login.component';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {
  errorMessage?:string
  email?:string
  patient:Patient

  constructor(public patientService:PatientService) { }

  ngOnInit(): void {
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

}
