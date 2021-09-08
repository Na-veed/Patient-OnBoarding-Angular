import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  doctor?:Doctor
  searchForm?: FormGroup;
  constructor(public doctorService:DoctorService,public router:Router,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      idForSearch: ['', Validators.required]
      })
    this.doctorService.getAllDoctors().subscribe((data:Doctor[])=>{
      console.log("Patients called from spring")
      this.doctorList = data;
      console.log(this.doctorList)
    },error => {this.errorMessage = error})
  }
  getDoctorById(){
    this.doctorService.getDoctorDetails(this.searchForm.get('idForSearch').value).subscribe((data:Doctor)=>{
      this.doctorList=[]
      if(data!=null)
      this.doctorList[0]= data;
      else
      this.errorMessage = "No records found"
      console.log(this.doctorList)
    },error => {this.errorMessage = "No records found"
   })
  }


}
