import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageSchdualService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient, private rout: Router) { }
  tripschedule: any = [];
  allTrains: any = []
  getAllTrains() {
    this.httpClient.get('https://localhost:7019/api/Train').subscribe((result) => {
      this.allTrains = result
    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }


  getTripSchedule() {

    this.httpClient.get('https://localhost:7019/api/TripSchedule')
      .subscribe(
        result => {
          this.tripschedule = result;
        },
        error => {
          console.log(error.message);
          this.toastr.error("error");
        }
      );
  }

  getTripScheduleById(tripId: number) {
    console.log("tripId" + tripId)
    this.httpClient.get("https://localhost:7019/api/TripSchedule/GetTripScheduleDTOByTripId/" + tripId).subscribe(resp => {
      this.tripschedule = resp;
      console.log(resp);
    }, err => {
      this.toastr.error("err")

    })
  }
  CreateTripSchedule(body: any) {
    console.log(body)
    this.httpClient.post('https://localhost:7019/api/TripSchedule/CreateTripSchedule', body).subscribe(resp => {

      this.toastr.success('TripSchedule created successfuly')
      this.rout.navigate(['/admin/tripschedule']);
    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error);
    });
  }

  deleteTripSchedule(id: number) {
    this.httpClient.delete("https://localhost:7019/api/TripSchedule/DeleteTripSchedule/" + id).subscribe(resp => {
      this.toastr.success("The TripSchedule Deleted")
      window.location.reload();
    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error);
    })

  }

  updateTripSchedule(body: any) {
    console.log(body)
    this.httpClient.put('https://localhost:7019/api/TripSchedule/UpdateTripSchedule', body).subscribe(resp => {
      this.toastr.success('TripSchedule updateed successfuly')

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error("error updating");
    });
  }
  endTripSchedule(id: number) {
    this.httpClient.delete("https://localhost:7019/api/Seat/RemoveReservedSeat/" + id).subscribe(resp => {
      this.toastr.success("Remove Reserved Seat")
      window.location.reload();
    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error);
    })

  }
}