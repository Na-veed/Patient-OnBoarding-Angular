import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicines } from 'src/app/model/medicines';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-buy-medicines',
  templateUrl: './patient-buy-medicines.component.html',
  styleUrls: ['./patient-buy-medicines.component.css']
})
export class PatientBuyMedicinesComponent implements OnInit {

  constructor(public patientService:PatientService,public router:Router) { }

  successMessage?:string;
  errorMessage?:string;
  medicines:Medicines[] = [];
  ngOnInit(): void {
    this.patientService.getMedicines(localStorage.getItem('userEmail')).subscribe((data)=>{
      this.medicines=data
      console.log(this.medicines)
      if(this.medicines == null){
        this.errorMessage = "Medicine have not yet alloted for you"
      }
    },error=>{
      this.errorMessage = "Medicine have not yet alloted for your email Id"
    })
  }

  ignoreMedicines(medicineNumber:number){
    this.patientService.removeMedicine(medicineNumber).subscribe(()=>{
      this.successMessage = "Medicine Removed Successfully";
      this.router.navigate(['patientmedicinePage'])
    },error => this.errorMessage = "Some error occured please try again later")
  }

  buyMedicines(medcineNumber:number){
    this.patientService.updateStatus(medcineNumber).subscribe(()=>{
      this.successMessage = "Medicines Added to cart Successfully";
      this.router.navigate(['patientmedicinePage'])
    },error => this.errorMessage = "Some error occured please try again later"
    )
  }

}
