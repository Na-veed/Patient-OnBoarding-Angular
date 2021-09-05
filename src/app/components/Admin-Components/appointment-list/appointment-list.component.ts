import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AdminService } from 'src/app/services/admin.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointmentList:Appointment[]=[]
  errorMessage?:string
  searchFormSpecializationId?:FormGroup
  searchFormConsultationType?:FormGroup
  searchFormDoctorId?:FormGroup
  searchFormStatus?:FormGroup
  doctorLoginId:number=+localStorage.getItem("doctorLoginId")
  diff?:string
  constructor(public activatedRoute: ActivatedRoute,public adminService:AdminService,public router:Router,public appointService:AppointmentService,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.diff = this.activatedRoute.snapshot.params['differ'];
    console.log("JSNDKMNSSS"+this.diff)
     this.searchFormSpecializationId = this.formBuilder.group({
      specializationidForSearch: ['', Validators.required]
      })
     this.searchFormConsultationType = this.formBuilder.group({
        consultationTypeForSearch: ['', Validators.required]
        })
     this.searchFormDoctorId = this.formBuilder.group({
          doctorIdForSearch: ['', Validators.required]
          })
     this.searchFormStatus = this.formBuilder.group({
      statusForSearch: ['', Validators.required]
            })
            if(this.diff=='allAppointments'){
              this.adminService.getAllAppointments( ).subscribe((data:Appointment[])=>{
                console.log("Patients called from spring")
                console.log(data)
                this.appointmentList = data;
                console.log(this.appointmentList)
              },error => {
                console.log("Patients called from spring")
                this.errorMessage = error})
            }
            else{
              this.appointService.getAppointmentByDoctorId(this.doctorLoginId).subscribe((data:Appointment[])=>{
                this.appointmentList=data
                console.log(this.appointmentList)
                if(data==null)
                this.errorMessage = "No records found"
                else{
                  this.errorMessage = ""
                }
                console.log(this.appointmentList)
              },error => {this.errorMessage = "No records found"
              console.log("error ayya saaami")
             })
            }
  }
  getAppointmentBySpecializationId(){
    this.appointService.getAppointmentBySpecializationId(this.searchFormSpecializationId.get('specializationidForSearch').value).subscribe((data:Appointment[])=>{
      this.appointmentList=data
      console.log(this.appointmentList)
      if(data==null)
      this.errorMessage = "No records found"
      else{
        this.errorMessage = ""
      }
      console.log(this.appointmentList)
    },error => {this.errorMessage = "No records found"
    console.log("error ayya saaami")
   })
  }
  getAppointmentByConsultationType(){
    this.appointService.getAppointmentByConsultationType(this.searchFormConsultationType.get('consultationTypeForSearch').value).subscribe((data:Appointment[])=>{
      this.appointmentList=data
      console.log(this.appointmentList)
      if(data==null)
      this.errorMessage = "No records found"
      else{
        this.errorMessage = ""
      }
      console.log(this.appointmentList)
    },error => {this.errorMessage = "No records found"
    console.log("error ayya saaami")
   })
  }
  getAppointmentByDoctorId(){
    this.appointService.getAppointmentByDoctorId(this.searchFormDoctorId.get('doctorIdForSearch').value).subscribe((data:Appointment[])=>{
      this.appointmentList=data
      console.log(this.appointmentList)
      if(data==null)
      this.errorMessage = "No records found"
      else{
        this.errorMessage = ""
      }
      console.log(this.appointmentList)
    },error => {this.errorMessage = "No records found"
    console.log("error ayya saaami")
   })
  }
  getAppointmentByStatus(){
    this.appointService.getAppointmentByStatus(this.searchFormStatus.get('statusForSearch').value).subscribe((data:Appointment[])=>{
      this.appointmentList=data
      console.log(this.appointmentList)
      if(data==null)
      this.errorMessage = "No records found"
      else{
        this.errorMessage = ""
      }
      console.log(this.appointmentList)
    },error => {this.errorMessage = "No records found"
    console.log("error ayya saaami")
   })
  }

}
