import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-facilities',
  templateUrl: './hospital-facilities.component.html',
  styleUrls: ['./hospital-facilities.component.css']
})
export class HospitalFacilitiesComponent implements OnInit {

  constructor(public hospitalService:HospitalService ,public router: Router) { }

  ngOnInit(): void {
  }

  scancentre() {
  
    this.router.navigate(['scancentre']);
  }

  infrastructuredetails(){

    this.router.navigate(['infrastructuredetails']);
  }

  receptiondetails(){
    this.router.navigate(['receptiondetails']);
  }

  appointments(){
    this.router.navigate(['appointmentdetails']);
  }
  pwcdetails(){
    this.router.navigate(['pwc']);
  }
  pharmacydetails(){
    this.router.navigate(['pharmacy']);
  }
  labdetails(){
    this.router.navigate(['lab']);
  }

  ambulancedetails(){
    this.router.navigate(['ambulance']);
  }

  cantin(){
    this.router.navigate(['cantin']);
  }

}
