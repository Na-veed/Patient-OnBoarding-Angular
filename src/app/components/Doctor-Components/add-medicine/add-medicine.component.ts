import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicines } from 'src/app/model/medicines';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  constructor(public formBuilder:FormBuilder,public doctorService:DoctorService,public router:Router) { }

  addMedicineForm?:FormGroup;
  successMessage?:string;
  errorMessage?:string;
  medicines:Medicines;
  ngOnInit(): void {
    this.addMedicineForm = this.formBuilder.group(
      {
        patientEmail: ['', Validators.required],
        medicineName: ['', Validators.required],
        quantity: ['', Validators.required],
        price: ['', Validators.required],
        status: ["pending",Validators.required]
      } 
    )
  }

  addMedicine(){
    this.doctorService.addMedicines(this.addMedicineForm.value).subscribe(()=>{
      this.successMessage = "Medicine Added Succesfully"
      this.router.navigate(['doctorAddMedicine'])
    },error => {
      this.errorMessage = "Some problem occured while adding the medicine, Please try again later"
      this.router.navigate(['doctorAddMedicine'])
    })
  }

}
