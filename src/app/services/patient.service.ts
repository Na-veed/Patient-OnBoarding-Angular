import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Appointment } from '../model/appointment';
import { Medicines } from '../model/medicines';
import { Patient } from '../model/patient.ts';

const patientUrl:string =  "http://localhost:9090/patients";
const save='save'
const medicinesUrl:string = "http://localhost:9090/medicines"
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

  loginPatient(patientEmail:string,password:string): Observable<Patient>{
    return this.httpClient.get<Patient>(patientUrl+"/authenticate/"+`${patientEmail}`+"/"+`${password}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  deletePatient(patientEmail:string): Observable<Patient>{
    return this.httpClient.delete(patientUrl+"/delete/"+`${patientEmail}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  
  updatePatient(patient:Patient):Observable<Patient>{
    console.log("update service called")
    console.log(patient)
    return this.httpClient.put<Patient>(patientUrl+"/update",patient,this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  getPatientByEmail(patientEmail:string):Observable<Patient>{
    return this.httpClient.get<Patient>(patientUrl +"/"+`${patientEmail}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getAllPatient():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(patientUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  
  }

  getMedicines(patientEmail:string):Observable<Medicines[]>{
    return this.httpClient.get<Medicines[]>(medicinesUrl + "/" + `${patientEmail}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )

  }

  removeMedicine(medicineNumber:number):Observable<Medicines>{
    return this.httpClient.delete<Medicines>(medicinesUrl + "/delete/" + `${medicineNumber}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  updateStatus(medicineNumber:number):Observable<Medicines>{
    return this.httpClient.put<Medicines>(medicinesUrl + "/updateStatus/" + `${medicineNumber}`,Medicines,this.httpOptions).pipe(
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





