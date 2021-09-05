import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Doctor } from '../model/doctor';
import { Medicines } from '../model/medicines';
import { Patient } from '../model/patient.ts';

const doctorUrl:string =  "http://localhost:9090/doctors";
const patientUrl:string =  "http://localhost:9090/patients";
const medicinesUrl:string = "http://localhost:9090/medicines"


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorId?:number
  password?:string
  doctor?:Doctor;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public httpClient:HttpClient) { }

  loginDoctor( doctorId?:number,password?:string): Observable<Doctor>{
    return this.httpClient.get<Doctor>(doctorUrl+"/authenticate/"+`${doctorId}`+"/"+`${password}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  getDoctorDetails( doctorId?:number): Observable<Doctor>{
    return this.httpClient.get<Doctor>(doctorUrl+'/'+`${doctorId}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }
  getAllDoctors(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(doctorUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getAllPatient(patient:Patient):Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(patientUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  
  }
   addDoctor(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(doctorUrl+"/save",patient,this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  
  }

  addMedicines(medicine:Medicines):Observable<Medicines>{
    return this.httpClient.post<Medicines>(medicinesUrl + "/save",medicine,this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
