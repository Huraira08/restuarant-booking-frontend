import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BookingsCalendarPageComponent } from './pages/bookings-calendar-page/bookings-calendar-page.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';

// NG Zorro
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BookingsPageComponent } from './pages/bookings-page/bookings-page.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { AnalyticsPageComponent } from './pages/analytics-page/analytics-page.component';
import { BookRestaurantPageComponent } from './pages/book-restaurant-page/book-restaurant-page.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NzModalModule } from 'ng-zorro-antd/modal';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ReportsPageComponent,
    BookingsPageComponent,
    FilterBarComponent,
    ReportCardComponent,
    AnalyticsPageComponent,
    BookRestaurantPageComponent,
    ProfilePageComponent,
    BookingsCalendarPageComponent,
    HomePageComponent,
    CalendarViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    NzFlexModule,
    NzFormModule,
    NzSpinModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzTableModule,
    NzProgressModule,
    NzDropDownModule,
    NzCalendarModule,
    NzModalModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
