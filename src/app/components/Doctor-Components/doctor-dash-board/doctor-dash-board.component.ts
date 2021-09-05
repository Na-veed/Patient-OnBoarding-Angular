import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dash-board',
  templateUrl: './doctor-dash-board.component.html',
  styleUrls: ['./doctor-dash-board.component.css']
})
export class DoctorDashBoardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  getAllPatients(){
    this.router.navigate(['AdminPatientListPage'])
  }
  appointmentListPage(){
    this.router.navigate(['appointmentListPage','doctorAppointments'])
  }
}
