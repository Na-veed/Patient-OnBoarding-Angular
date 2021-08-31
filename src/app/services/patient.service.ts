import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Patient } from '../model/patient.ts';

const patientUrl:string =  "http://localhost:9090/patients";
const save='save'
@Injectable
({
  providedIn: 'root'
})

export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }

  addPatient(patient:Patient): Observable<Patient>{
    console.log(patient)
    return this.httpClient.post<Patient>(`${patientUrl}/${save}`,patient,this.httpOptions).pipe
    (
      retry(1),
      catchError(this.errorHandler)
    )
  }

  addAppointment(patient:Patient): Observable<Patient>{
    console.log(patient)
    return this.httpClient.post<Patient>(patientUrl,patient,this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  loginPatient(patientEmail:string,password:string): Observable<Patient>{
    return this.httpClient.get<Patient>(patientUrl+"authenticate"+`${patientEmail}`+`${password}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  
  updatePatient(patient:Patient):Observable<Patient>{
    return this.httpClient.put<Patient>(patientUrl+"update",patient,this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getPatientByEmail(patientEmail:string):Observable<Patient>{
    return this.httpClient.get<Patient>(patientUrl + "").pipe(
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





