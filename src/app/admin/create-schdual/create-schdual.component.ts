import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../services/report.service';
import { TripService } from 'src/app/Services/trip.service';
@Component({
  selector: 'app-create-schdual',
  templateUrl: './create-schdual.component.html',
  styleUrls: ['./create-schdual.component.css']
})
export class CreateSchdualComponent  implements OnInit {
  scheduleForm: FormGroup;


  constructor(public reportService: ReportService, private fb: FormBuilder ,public tripService: TripService) {
    this.scheduleForm = this.fb.group({
      departureTime: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      tripId: ['', Validators.required],
      trainId: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {}


  save() {
    this.reportService.CreateTripSchedule(this.scheduleForm.value)
  }
  selectDate() {
    this.tripService.checkTripScheduleAvailability(this.tripService.selectedTrip.tripid,
      this.scheduleForm.controls['date'].value
    );
    this.scheduleForm.get('hour')?.enable();

  }
}
