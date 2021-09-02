import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Appointment } from '../model/appointment';
import { Patient } from '../model/patient.ts';

const patientUrl:string =  "http://localhost:9090/patients";
const appointmentUrl:string = "http://localhost:9090/appointments";
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
      retry(0),
      catchError(this.errorHandler)
    )
  }

  addAppointment(appointment:Appointment): Observable<Appointment>{
    console.log(appointment)
    return this.httpClient.post<Appointment>(`${appointmentUrl}/${save}`,appointment,this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  loginPatient(patientEmail:string,password:string): Observable<Patient>{
    return this.httpClient.get<Patient>(patientUrl+"/authenticate/"+`${patientEmail}`+"/"+`${password}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  
  updatePatient(patient:Patient):Observable<Patient>{
    return this.httpClient.put<Patient>(patientUrl+"/update",patient,this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  getPatientByEmail(patientEmail:string):Observable<Patient>{
    console.log("in service now")
    return this.httpClient.get<Patient>(patientUrl +"/"+`${patientEmail}`).pipe(
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
      // Get server-side message
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    switch (error.status) {
      case 200:    console.log("200's");

        break;
      case 401:
        break;
      case 403:
        break;
      case 0:
      case 400:
      case 405:
      case 406:
      case 409:
      case 500:
        break;
    }

    console.log(errorMessage);
    return throwError(error.status);
  }


}





