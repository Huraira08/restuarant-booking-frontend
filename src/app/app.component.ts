import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'RestaurantBookingSystem';
  showSideBar = true;
  showHeader = true;
  role!: string;

  constructor(public router: Router,
    private authService: AuthService
  ){

  }

  ngOnInit(): void {
    this.authService.getRoleObs().subscribe({
      next: (role: string) => {
        this.role = role;
        console.log(this.role)
      }
    })
  }
  
  toggleSideBar(component: Component){
    const newRole = this.authService.getRole()
    if(component instanceof LoginPageComponent || component instanceof RegisterPageComponent
    ){
      this.showSideBar = false;
      this.showHeader = false;
    }else if(newRole !== "Admin"){
      this.showSideBar = false;
      this.showHeader = true;
    }else{
      this.showSideBar = true;
      this.showHeader = true;
    }
  }

  navToProfile() {
    this.router.navigate(['/profile'])
  }
  logout() {
    // this.authService.setRole('User')
    this.router.navigate(['/login'])
  }
  
}
