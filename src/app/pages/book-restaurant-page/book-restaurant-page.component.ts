import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-restaurant-page',
  templateUrl: './book-restaurant-page.component.html',
  styleUrl: './book-restaurant-page.component.css'
})
export class BookRestaurantPageComponent {
  reservationForm!: FormGroup;
  errorMessage: string = '';
  pastDateErrorMessage = ''
  wrongTimeErrorMessage = '';

  constructor(private formBuilder: FormBuilder){
    this.reservationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: [Date.now(), Validators.required],
      time: [Date.now(), Validators.required],
      noOfPeople: ['', Validators.required]
    })
  }
  get date(){
    return this.reservationForm.get('date');
  }
  get time(){
    return this.reservationForm.get('time');
  }
  submitReservation(){
    this.validateDate()
    this.validateTime()
    if(this.reservationForm.valid 
      && !this.pastDateErrorMessage
      && !this.wrongTimeErrorMessage
    ){
      console.log(this.reservationForm.value)
    }else{
      Object.values(this.reservationForm.controls).forEach(control => {
        if(control.invalid){
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      })
    }
  }

  validateDate() {
    if(this.date!.value < Date.now()){
      this.pastDateErrorMessage = 'Please select a date in the future.'
    }else{
      this.pastDateErrorMessage = ''
    }
  }

  validateTime(){
    const startTime = new Date().setHours(1, 0, 0, 0); // 1 A.M.
    const endTime = new Date().setHours(16, 0, 0, 0); // 4 P.M. (16:00 hours)
    
    if (this.time!.value >= startTime && this.time!.value <= endTime){
      this.wrongTimeErrorMessage = 'Time must be between 4 P.M. and 1 A.M.'
    }else{
      this.wrongTimeErrorMessage = ''
    }
  }
}
