import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role!: string;
  private roleSubject!: BehaviorSubject<string>;
  constructor() { 
    this.role = 'User';
    this.roleSubject = new BehaviorSubject<string>(this.role);
    console.log(this.role);
  }
  
  public getRoleObs() {
    // get role from localStorage
    this.role = localStorage.getItem('role') || 'User';
    // this.role = 'User';
    console.log(this.role);
    return this.roleSubject.asObservable();
  }
  public setRole(role: string) {
    // store role in locaStorage
    this.role = role;
    this.roleSubject.next(this.role);
    localStorage.setItem('role', role);
    console.log(this.role);
  }
  getRole(){
    this.role = localStorage.getItem('role') || 'User';
    return this.role;
  }
}
