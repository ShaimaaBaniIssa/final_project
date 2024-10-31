import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient, private rout: Router) { }


  selectedTrip: any = {};

  tripSchedules: any = [];
  availableSeats: any = [];



  getAvailableSeats(tripScheduleId: any) {

    this.httpClient.get("https://localhost:7019/api/TripSchedule/GetAvailableSeats/" + tripScheduleId)
      .subscribe(
        result => {
          this.availableSeats = result;
        },
        error => {
          console.log(error.message);
          this.toastr.error("error");
        }
      );
  }
  getTripScheduleById(tripId: number) {
    this.httpClient.get("https://localhost:7019/api/TripSchedule/GetTripScheduleByTripId/" + tripId).subscribe(
      result => {
        this.tripSchedules = result;
        console.log(result);
      },
      error => {
        this.toastr.error("error");
      }
    )
  }


}
