import { Component } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'RestaurantBookingSystem';
  showSideBar = true;

  constructor(public router: Router){

  }
  
  toggleSideBar(component: Component){
    if(component instanceof LoginPageComponent || component instanceof RegisterPageComponent){
      this.showSideBar = false;
    }else{
      this.showSideBar = true;
    }
  }
  
}
