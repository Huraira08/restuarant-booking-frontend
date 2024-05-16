import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { BookingsPageComponent } from './pages/bookings-page/bookings-page.component';
import { AnalyticsPageComponent } from './pages/analytics-page/analytics-page.component';
import { BookRestaurantPageComponent } from './pages/book-restaurant-page/book-restaurant-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BookingsCalendarPageComponent } from './pages/bookings-calendar-page/bookings-calendar-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:"", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginPageComponent},
  {path: "register", component: RegisterPageComponent},

  // admin pages
  {path: "reports", component: ReportsPageComponent},
  {path: "bookings", component: BookingsPageComponent},
  {path: "analytics", component: AnalyticsPageComponent},
  {path: "bookings-calendar", component: BookingsCalendarPageComponent},

  // user pages
  {path: "home", component: HomePageComponent},
  {path: "book-restaurant", component: BookRestaurantPageComponent},
  {path: "profile", component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
