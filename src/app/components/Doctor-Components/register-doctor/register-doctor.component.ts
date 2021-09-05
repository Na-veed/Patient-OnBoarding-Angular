import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  addDoctorForm:FormGroup
  errorMessage?:string
  constructor(public doctorService:DoctorService,public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.addDoctorForm = this.formBuilder.group({
    doctorId: ['', Validators.required],
    password: ['', Validators.required],
    specialization: ['', Validators.required],
    doctorName: ['', Validators.required],
    specializationId: ['', Validators.required],
    qualification: ['', Validators.required],
    experience: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    email: ['', Validators.required]
    })
    
  }
  addDoctor(){
        this.doctorService.addDoctor(this.addDoctorForm.value).subscribe(()=> {
    }, error =>{
      console.log(error)
      this.errorMessage = error
      if(this.errorMessage!="200"){
        console.log("success")
        this.router.navigate(['adminDashboard'])
      }
      else{
        this.errorMessage="Id Already Exist"
        console.log(this.errorMessage)
      }
    })

  }
}
