import { Component, Inject } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { startOfDay } from 'date-fns';

interface ICalendarModalData{
  bookDate: Date
}

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.css'
})
export class CalendarViewComponent {

  constructor(@Inject(NZ_MODAL_DATA) public modalData: ICalendarModalData){
    console.log(modalData.bookDate)
  }

  getBookDate(){
    return startOfDay(this.modalData.bookDate);
  }

  isSameDate(date: any): any {
    return this.modalData.bookDate == date
  }

  changeDate(date: Date) {
    // logic to change the booking date
    console.log(date.toDateString())
  }

}
