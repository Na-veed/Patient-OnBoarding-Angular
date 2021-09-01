import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  constructor(public doctorService:DoctorService,public router: Router) { }

  doctorLoginForm?:FormGroup;
  errorMessage?: string;

  ngOnInit(): void {
    //form validators and control name should come here
  }

  loginDoctor(){
    this.router.navigate(["doctorDashboard"])
  }
}
