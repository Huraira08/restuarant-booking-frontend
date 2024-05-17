import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-bookings-calendar-page',
  templateUrl: './bookings-calendar-page.component.html',
  styleUrl: './bookings-calendar-page.component.css'
})
export class BookingsCalendarPageComponent {
  currentDate = new Date
  constructor(private modalService: NzModalService){}
showBookingsModal(date: Date) {
  console.log(date)
  this.modalService.create({
    nzTitle: "Bookings on current date",
    nzContent: "Show current date's bookings here"
  })
}

}
