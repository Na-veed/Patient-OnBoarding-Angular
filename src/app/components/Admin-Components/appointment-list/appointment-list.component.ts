import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointmentList:Appointment[]=[]
  errorMessage?:string
  constructor(public adminService:AdminService,public router:Router) { }

  ngOnInit(): void {
    this.adminService.getAllAppointments().subscribe((data:Appointment[])=>{
      console.log("Patients called from spring")
      console.log(data)
      this.appointmentList = data;
      console.log(this.appointmentList)
    },error => {
      console.log("Patients called from spring")
      this.errorMessage = error})
      console.log(this.appointmentList )
  }

}
