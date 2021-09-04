import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Admin } from '../model/admin';
import { Patient } from '../model/patient.ts';

const adminUrl:string = "http://localhost:9090/admin";
const patientUrl:string =  "http://localhost:9090/patients";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public httpClient:HttpClient) { }

  loginAdmin(adminId:number,password:string): Observable<Admin>{
    return this.httpClient.get<Admin>(adminUrl+"/authenticate/"+`${adminId}`+"/"+`${password}`).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  getAllPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(patientUrl+"").pipe(
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
