import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  updateForm?: FormGroup;
  errorMessage?: string;
  successMessage?: string;
  constructor(public patientService:PatientService,public router:Router) { }

  ngOnInit(): void {
  }

  updatePatient(){
    this.patientService.updatePatient(this.updateForm.value).subscribe(()=>{

    },error => this.errorMessage = error)
    this.router.navigate(['viewDetailsPage'])
  }

  
}
