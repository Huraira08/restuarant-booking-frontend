import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  filterDate!: Date;
  filterTime!: Date
  filterRestaurant!: string;
}
