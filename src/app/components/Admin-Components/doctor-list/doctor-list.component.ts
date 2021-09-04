import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { AdminService } from 'src/app/services/admin.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctorList:Doctor[]=[]
  errorMessage?:string
  constructor(public adminService:AdminService,public doctorService:DoctorService,public router:Router) { }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe((data:Doctor[])=>{
      console.log("Patients called from spring")
      this.doctorList = data;
      console.log(this.doctorList)
    },error => {this.errorMessage = error})
  }

}
