import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsCalendarPageComponent } from './bookings-calendar-page.component';

describe('BookingsCalendarPageComponent', () => {
  let component: BookingsCalendarPageComponent;
  let fixture: ComponentFixture<BookingsCalendarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsCalendarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingsCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
