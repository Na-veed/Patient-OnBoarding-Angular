import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Appointment } from '../model/appointment';

const appointmentUrl:string = "http://localhost:9090/appointments";
const save = "save";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }


addAppointment(appointment:Appointment): Observable<Appointment>{
  console.log(appointment)
  return this.httpClient.post<Appointment>(`${appointmentUrl}/${save}`,appointment,this.httpOptions).pipe(
    retry(0),
    catchError(this.errorHandler)
  )
}
getAppointmentBySpecializationId( specializationId?:number): Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>(appointmentUrl+'/'+`${specializationId}`).pipe(
    retry(0),
    catchError(this.errorHandler)
  )
}
getAppointmentByConsultationType( consultationType?:string): Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>(appointmentUrl+'/mode/'+`${consultationType}`).pipe(
    retry(0),
    catchError(this.errorHandler)
  )
}
getAppointmentByDoctorId( doctorId?:number): Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>(appointmentUrl+'/get/'+`${doctorId}`).pipe(
    retry(0),
    catchError(this.errorHandler)
  )
}
getAppointmentByStatus( status?:string): Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>(appointmentUrl+'/status/'+`${status}`).pipe(
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