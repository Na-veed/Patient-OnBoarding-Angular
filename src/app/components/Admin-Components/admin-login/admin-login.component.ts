import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm?: FormGroup;
  errorMessage?:string;
  
  constructor(public adminService:AdminService,public router:Router,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.adminLoginForm = this.formBuilder.group({
      adminId:['',Validators.required],
      password:['',[Validators.required,Validators.min(6)]],
      lastLoggedInTime:['']
    })
  }

  loginAdmin(){
    this.adminService.loginAdmin(this.adminLoginForm.get('adminId').value,this.adminLoginForm.get('password').value).subscribe(()=>{
      this.router.navigate(['adminDashboard'])
    },error => {
    this.errorMessage = "Authentication Failed"
    this.router.navigate(['adminLoginPage'])
    })

  }

}
