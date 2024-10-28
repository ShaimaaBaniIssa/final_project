import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }


  selectedTrip: any = {};
  tripSchedules: any = [];
  availableSeats: any = [];
  tripsearch: any = [];

  checkTripScheduleAvailability(tripId: any, reservationDate: Date) {

    this.httpClient.get('https://localhost:7019/api/TripSchedule/CheckTripScheduleAvailability/' + tripId + '/' + reservationDate)
      .subscribe(
        result => {
          this.tripSchedules = result;
          if (this.tripSchedules.length == 0)
            this.toastr.warning("no trip in this date");
        },
        error => {
          this.toastr.error("error");
        }
      );
  }
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
  SearchTrip(startDate: string, endDate: string) {
    this.httpClient.get(`https://localhost:7019/api/TripSchedule/SearchTrip?startDate=${startDate}&endDate=${endDate}`)
      .subscribe(
        result => {
          this.tripsearch = result;
        },
        error => {
          console.log(error.message);
          this.toastr.error("error");
        }
      );
  }

}
