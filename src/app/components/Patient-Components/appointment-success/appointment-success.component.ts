import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-success',
  templateUrl: './appointment-success.component.html',
  styleUrls: ['./appointment-success.component.css']
})
export class AppointmentSuccessComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  appointmentPage(){
    this.router.navigate(['appointmentPage'])
  }

  homepage(){
    this.router.navigate(['patientDashboard'])
  }


}
