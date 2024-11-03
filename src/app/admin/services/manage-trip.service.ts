import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageTripService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient, private rout: Router) { }
  selectedTrip: any = {};
  tripSchedules: any = [];
  availableSeats: any = [];
  createTrip(body: any) {
    console.log(body)
    this.httpClient.post('https://localhost:7019/api/Trip/CreateTrip', body).subscribe((res) => {
      this.toastr.success("Trip Created successfully.");
      this.rout.navigate(['/admin/trip'])

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error("error");
    })
  }
  updateTrip(body: any) {
    console.log(body)
    this.httpClient.put('https://localhost:7019/api/Trip/UpdateTrip', body).subscribe((res) => {
      this.toastr.success("Trip updated successfully.");
      this.rout.navigate(['/admin/tripdetails'])

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error("error");
    })
  }
  DeleteTrip(id: number) {
    this.httpClient.delete("https://localhost:7019/api/Trip/DeleteTrip/" + id).subscribe(resp => {

      window.location.reload()
      this.toastr.success("The Trip Deleted")
    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error("error");
    })
  }



  checkTripScheduleAvailability(tripId: any, reservationDate: Date) {
    return this.httpClient.get<boolean>('https://localhost:7019/api/TripSchedule/CheckTripScheduleAvailability/' + tripId + '/' + reservationDate);

  }
}
