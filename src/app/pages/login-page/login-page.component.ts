import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm!: FormGroup
  errorMessage = ''

  loggingIn: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private router: Router
  ){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  async submitForm(){
    this.router.navigate(['/reports']);
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
}
