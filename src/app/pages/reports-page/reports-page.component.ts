import { Component } from '@angular/core';
import { Report } from '../../models/report';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.css'
})
export class ReportsPageComponent {
  valueToNumber(value: number){
    return (value/2).toFixed(0).toString()
  }
}
