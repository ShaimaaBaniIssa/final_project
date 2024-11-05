import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripService } from 'src/app/Services/trip.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {
  tripScheduleForm!: FormGroup;
  tripSchedules: any[] = [];

  constructor(
    public reportService: ReportService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.tripScheduleForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }

  onSearch(): void {
    if (this.tripScheduleForm.valid) {
      const { startDate, endDate } = this.tripScheduleForm.value;
      this.reportService.SearchTrip(startDate, endDate)
        ;
    }
  }
}
