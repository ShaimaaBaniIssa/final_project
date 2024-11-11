import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient, private rout: Router) { }


  // selectedTrip: any = {};
  trips: any = [];

  tripSchedules: any = [];
  getAvailableSeats(tripScheduleId: any) {
    return this.httpClient.get("https://localhost:7019/api/TripSchedule/GetAvailableSeats/" + tripScheduleId);
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
  getTripById(id: any) {
    if (!this.trips.length) {
      console.log("no trip")
      return this.httpClient.get(`https://localhost:7019/api/Trip/GetTripById/${id}`);
    }

    const trip = this.trips.find((st: any) => st.tripid == id);
    return of(trip);
  }

  getStationTrips(stationId: any) {

    this.httpClient.get('https://localhost:7019/api/Trip/GetTripsByStationId/' + stationId)
      .subscribe(
        result => {
          this.trips = result;
        },
        error => {
          this.toastr.error("error");
        }
      );
  }
}
