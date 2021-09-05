import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicines } from 'src/app/model/medicines';
import { AdminService } from 'src/app/services/admin.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-admin-medicine-list',
  templateUrl: './admin-medicine-list.component.html',
  styleUrls: ['./admin-medicine-list.component.css']
})
export class AdminMedicineListComponent implements OnInit {

  constructor(public adminService:AdminService,public router:Router,public formbuilder:FormBuilder,public patientService:PatientService) { }
  searchForm?:FormGroup;
  successMessage?:string;
  errorMessage?:string;
  medicinesList:Medicines[] = []
  filterForm?:FormGroup;

  ngOnInit(): void {
    this.searchForm = this.formbuilder.group({
      searchByEmail:['',[Validators.required]]
    })
    this.filterForm = this.formbuilder.group({
      filter:['',[Validators.required]]
    })
    this.adminService.getAllMedicines().subscribe((data)=>{
      this.medicinesList = data
    })
  }

  ignoreMedicines(medicineNumber:number){
    this.patientService.removeMedicine(medicineNumber).subscribe(()=>{
      this.successMessage = "Medicine Removed Successfully";
      this.router.navigate(['adminMedicineList'])
    },error => this.errorMessage = "Some error occured please try again later")
  }

  getMedicineByEmail(){
    
    this.patientService.getMedicines(this.searchForm.get('searchByEmail').value).subscribe((data)=>{
     this.medicinesList = data
     this.router.navigate(['adminMedicineList'])
    },error=>{
      this.errorMessage = "Some error occured, Please try again later"
    })
  }

  getMedicineByStatus(){
  
    this.adminService.getMedicineByStatus(this.filterForm.get('filter').value).subscribe((data)=>{
      this.medicinesList = data
      this.router.navigate(['adminMedicineList'])
    },error => {
      this.errorMessage =  "Some error occured, Please try again later";
    })
    }
    
  }


