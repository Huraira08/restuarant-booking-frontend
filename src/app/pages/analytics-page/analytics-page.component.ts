import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, Title } from 'chart.js/auto';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrl: './analytics-page.component.css'
})
export class AnalyticsPageComponent implements OnInit {
  @ViewChild('revenueChart') revenueChart!: ElementRef
  @ViewChild('pieChart') pieChart!: ElementRef

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const data1 = {
      labels: labels,
      datasets: [
        {
          label: 'Revenues',
          data: [65, 59, 80, 81, 56],
          backgroundColor: 'green',
          borderColor: 'green',
        },
        {
          label: 'Invested amount',
          data: [44, 39, 40, 30, 32],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
        },

      ] // dataset array
    }; // data object
    
    const ctxLine = this.revenueChart.nativeElement.getContext("2d");

    // line chart
    new Chart(ctxLine, {
      type: 'line',
      data: data1,
      options:{
        responsive: true,
        plugins:{
          title: {
            display: true,
            text: 'Revenues vs Investment (in K)',
            font:{
              size:20
            }
          }
        }
      }
    })

    const labelsPie = ['Confirmed', 'Pending', 'Cancelled'];
    const dataPie = {
      labels: labelsPie,
      datasets: [
        {
          label: 'Reservation status',
          data: [85, 59, 30],
          backgroundColor: ['green', '#ffbbcc', 'red'],
          borderColor: 'rgba(255, 255, 255, 1)',
        },
      ] // dataset array
    }; // data object

    const ctxPie = this.pieChart.nativeElement.getContext("2d");
    new Chart(ctxPie, {
      type: 'pie',
      data: dataPie,
      options:{
        plugins:{
          title:{
            display: true,
            text: 'Reservation status',
            font:{
              size:20
            }
          }
        }
      }
    })

  }

}
