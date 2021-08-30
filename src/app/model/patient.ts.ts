import { Time } from "@angular/common";

export class Patient {
    firstName?:string;
    lastName?:string;
    patientEmail?:string;
    password?:string;
    dateOfBirth?:Date;
    bloodGroup?:string;
    city?:string;
    phoneNumber?:number;
    alternatePhoneNumber?:number;
    alternateEmail?:string;
    patientWeight?:number;
    patientHeight?:number;
    lastLoggedInTime?:Time;
}

