import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  firstName?:string;
  lastName?:string;
  patientEmail?:string;
  dateOfBirth?:Date;
  city?:string;
  phoneNumber?:number;
  alternatePhoneNumber?:number;
  constructor(public router:Router,public patientService:PatientService) {
    
   }

  ngOnInit(): void {
    this.firstName = "Naveed"
  }

  updatePatient(){
    this.router.navigate(['updatePatientPage'])
  }

  deletePatient(){
    this.router.navigate(['deletePatientPage'])
  }

}
