import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

// enum Role{
//   Admin = 'Admin',
//   User = 'User'
// }

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm!: FormGroup
  roles = ['User', 'Admin']
  errorMessage = ''

  loggingIn: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private router: Router,
    private authService: AuthService
  ){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  get role(){
    return this.loginForm.controls['role'].value;
  }
  async submitForm(){
    this.authService.setRole(this.role)
    if(this.role === "Admin"){
      this.router.navigate(['/reports']);
    }else if(this.role === "User"){
      this.router.navigate(['/home'])
    }

    // Disable the validation for now
    // if(this.loginForm.valid){
    // }else{
    //   Object.values(this.loginForm.controls).forEach(control => {
    //     if(control.invalid){
    //       control.markAsDirty();
    //       control.updateValueAndValidity({onlySelf: true});
    //     }
    //   })
    // }
    
  }

  roleChange(role: string){
    this.loginForm.controls['role'].setValue(role);
    this.loginForm.controls['role'].markAsDirty();
    this.loginForm.controls['role'].updateValueAndValidity({onlySelf: true});
  }
}
