import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../services/report.service';
import { TripService } from 'src/app/Services/trip.service';
import { ManageTripService } from '../services/manage-trip.service';
import { ManageSchdualService } from '../services/manage-schdual.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-create-schdual',
  templateUrl: './create-schdual.component.html',
  styleUrls: ['./create-schdual.component.css']
})
export class CreateSchdualComponent implements OnInit {
  scheduleForm: FormGroup;
  tripId: any;

  constructor(public tripSc: ManageSchdualService, private fb: FormBuilder,
    private trip: ManageTripService, public shedual: ManageSchdualService, private rout: Router,
    private toastr: ToastrService) {
    this.scheduleForm = this.fb.group({
      departureTime: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      tripId: [this.tripId],
      trainid: [null, Validators.required],
      tdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.shedual.getAllTrains()
    this.tripId = localStorage.getItem('tripId');

  }


  save() {
    this.scheduleForm.controls['tripId'].setValue(this.tripId)
    this.tripSc.CreateTripSchedule(this.scheduleForm.value)
  }
  selectDate() {
    const selectedDate = this.scheduleForm.controls['tdate'].value;
    console.log("Checking availability for trip ID:", this.tripId, "on date:", selectedDate);

    this.trip.checkTripScheduleAvailability(this.tripId, selectedDate).subscribe(
      (isAvailable: any) => {
        console.log(isAvailable);
        if (isAvailable) {

          console.log('Trip is available for the selected date.');

        } else {

          this.toastr.error('Trip is not available on the selected date.', 'Unavailable');
          this.scheduleForm.controls['tdate'].setErrors({ unavailable: true });
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.toastr.error("Not Authorize");

        }
        else
          this.toastr.error("error");
      }
    );
  }
}
