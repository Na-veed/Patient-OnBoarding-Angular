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


  constructor(public patientService:PatientService,public router:Router) { }

  ngOnInit(): void {
      this.patientService.getPatientByEmail(localStorage.getItem('userEmail')).subscribe((data:Patient) => {
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

goBack(){
  this.router.navigate(['patientDashboard'])
}
}