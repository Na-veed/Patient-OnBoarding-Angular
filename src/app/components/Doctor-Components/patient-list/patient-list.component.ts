import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.ts';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  errorMessage?:string
  patients: Patient []=[]
  constructor(public patientService:PatientService,public router:Router) { }

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe((data)=>{
      this.patients=data
    },error=>{this.errorMessage = error
    },)
  }

  deletePatient(){

  }

  getPatientByEmail(){
    
  }

}
