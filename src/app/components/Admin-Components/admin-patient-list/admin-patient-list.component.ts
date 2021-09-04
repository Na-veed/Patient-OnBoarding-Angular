import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.ts';
import { AdminService } from 'src/app/services/admin.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-admin-patient-list',
  templateUrl: './admin-patient-list.component.html',
  styleUrls: ['./admin-patient-list.component.css']
})
export class AdminPatientListComponent implements OnInit {

  constructor(public adminService:AdminService,public patientService:PatientService,public router:Router) { }

  patientList: Patient[] = [];
  errorMessage?:string;
  deleteMessage?:string;
  patient?:Patient;

 

  ngOnInit(): void {
    this.adminService.getAllPatients().subscribe((data:Patient[])=>{
      console.log("Patients called from spring")
      this.patientList = data;
      console.log(this.patientList)
    },error => {this.errorMessage = error})
  
  }

  deletePatient(patientEmail:string){
   this.patientService.deletePatient(patientEmail).subscribe((data:Patient)=>{
     this.patient = data;
     this.deleteMessage = patientEmail + " deleted successfully";
     this.router.navigate(['AdminPatientListPage']);
   },error => {this.errorMessage = patientEmail + " deletion have faced issue please try again later"
   this.router.navigate(['AdminPatientListPage'])
  })
   
      
  }

  getPatientByEmailId(){

  }
}
