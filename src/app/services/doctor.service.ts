import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Doctor } from '../model/doctor';
import { Patient } from '../model/patient.ts';

const doctorUrl:string =  "";
const patientUrl:string =  "http://localhost:9090/patients";


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorEmail?:string
  password?:string
  doctor?:Doctor;
  constructor(public httpClient:HttpClient) { }

  loginDoctor( doctorEmail?:string,password?:string): Observable<Doctor>{
    return this.httpClient.get<Doctor>(doctorUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getAllPatient(patient:Patient):Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(patientUrl + "").pipe(
      retry(1),
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
