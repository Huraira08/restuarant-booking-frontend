import { Component } from '@angular/core';
import { Report } from '../../models/report';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CalendarViewComponent } from '../../components/calendar-view/calendar-view.component';

@Component({
  selector: 'app-bookings-page',
  templateUrl: './bookings-page.component.html',
  styleUrl: './bookings-page.component.css'
})
export class BookingsPageComponent {
  reports: Report[] = [
    {
      name: "John Smith",
      mobile: "+1234567890",
      time: "18:00",
      date: "2024-05-17",
      noOfPeople: 2,
      tableSize: 4,
      status: "confirmed"
    },
    {
      name: "Alice Lee",
      mobile: "+9876543210",
      time: "20:30",
      date: "2024-05-20",
      noOfPeople: 4,
      tableSize: 6,
      status: "pending"
    },
    {
      name: "Michael Brown",
      mobile: "+5412367890",
      time: "19:00",
      date: "2024-05-18",
      noOfPeople: 3,
      tableSize: 6,
      status: "confirmed"
    },
    {
      name: "Olivia Jones",
      mobile: "+7894561230",
      time: "17:30",
      date: "2024-05-19",
      noOfPeople: 1,
      tableSize: 2,
      status: "pending"
    },
    {
      name: "William Miller",
      mobile: "+2345678901",
      time: "21:00",
      date: "2024-05-21",
      noOfPeople: 5,
      tableSize: 8,
      status: "confirmed"
    },
    // ... (continues with 15 more reservations)
    {
      name: "Emily Garcia",
      mobile: "+9182736450",
      time: "18:30",
      date: "2024-05-31",
      noOfPeople: 6,
      tableSize: 10,
      status: "pending"
    }
  ];

  constructor(private modalService: NzModalService){}
  viewInCalendar(report: Report) {
    this.modalService.create({
      nzTitle: "Calendar View",
      nzContent: CalendarViewComponent,
      nzData:{
        bookDate: report.date
      }
    })
  }
}
