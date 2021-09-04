import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponentOfDoctor implements OnInit {

  doctorId:number=+localStorage.getItem('doctorLoginId')
  doctor?:Doctor
  errorMessage?:string
  constructor(public doctorService:DoctorService,public router:Router) { }

  ngOnInit(): void {
    this.doctorService.getDoctorDetails(this.doctorId).subscribe((data:Doctor) => {
      console.log(localStorage.getItem('doctorLoginId'))
      // console.log(this.patientLoginComponent.userEmail)
      this.doctor=data
    }, error =>{
      console.log("error came")
      this.errorMessage = error
    } 
    )
  }
  updateDoctor(){
    this.router.navigate([''])
  }
  
  goBack(){
    this.router.navigate(['doctorDashboard'])
  }

}
