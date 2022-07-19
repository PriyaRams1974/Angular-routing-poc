import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  getToken(){
    console.log("getToken ",!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  getRole(){
    console.log("In Service getRole ",!!localStorage.getItem('role'));
    return localStorage.getItem('role');
  }
}
