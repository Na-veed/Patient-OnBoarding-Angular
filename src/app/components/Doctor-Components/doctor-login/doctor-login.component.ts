import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  constructor(public doctorService:DoctorService,public router: Router,public formBuilder:FormBuilder) { }

  doctorLoginForm?:FormGroup;
  errorMessage?: string;

  ngOnInit(): void {
    // validators and control name should come here
    this.doctorLoginForm = this.formBuilder.group({
      doctorId: ['',Validators.required],
      password:['',Validators.required]

    })
  }

  loginDoctor(){
    this.doctorService.loginDoctor(this.doctorLoginForm.get('doctorId').value,this.doctorLoginForm.get('password').value).subscribe(()=>{
        localStorage.setItem('doctorLoginId', this.doctorLoginForm.get('doctorId').value)
      this.router.navigate(['doctorDashboard'])
    },error=>{this.errorMessage = error
      this.errorMessage = "You Entered Incorrect Credentials"
    },)
  }
}
