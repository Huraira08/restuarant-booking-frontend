import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm!: FormGroup
  signingIn: boolean = false
  errorMessage: string = '';
  // genderLabels: 

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    // private router: Router
  ){
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      age: ['', [Validators.required]],
      cnic: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{7}-\d{1}$/)]],
    })
    
  }



  async submitForm(){

    // Disabled the validation for now
    // if(this.registerForm.controls['password'].value !== this.registerForm.controls['confirmPassword'].value){
    //   this.errorMessage = 'Passwords do not match'; 
    //   return;
    // }

    // if(this.registerForm.valid){
    // }else{
    //   Object.values(this.registerForm.controls).forEach(control => {
    //     if(control.invalid){
    //       control.markAsDirty();
    //       control.updateValueAndValidity({onlySelf: true});
    //     }
    //   })
    // }
  }

  handleChange(e:any){
console.log(e);
  }
}
