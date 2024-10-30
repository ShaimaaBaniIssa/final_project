import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  tripsearch: any = [];
  tripschedule: any = [];

  SearchTrip(startDate: string, endDate: string) {
    this.httpClient.get(`https://localhost:7019/api/TripSchedule/SearchTrip?startDate=${startDate}&endDate=${endDate}`)
      .subscribe(
        result => {
          this.tripsearch = result;
          console.log(result)
        },
        error => {
          console.log(error.message);
          this.toastr.error("error");
        }
      );
  }
  getTripSchedule() {

    this.httpClient.get('https://localhost:7019/api/TripSchedule')
      .subscribe(
        result => {
          this.tripschedule= result;
        },
        error => {
          console.log(error.message);
          this.toastr.error("error");
        }
      );
  }
  CreateTripSchedule(body: any) {
  
    this.httpClient.post('https://localhost:7019/api/TripSchedule/CreateTripSchedule', body).subscribe(resp => {
      this.toastr.success('TripSchedule created successfuly')

    }, err => {
      this.toastr.error("Error");
    });
  }
  CheckTripScheduleAvailability(tripId: number, tripScheduleDate: Date) {
    const formattedDate = tripScheduleDate.toISOString();
  
    this.httpClient.get(`https://localhost:7019/api/TripSchedule/CheckTripScheduleAvailability/${tripId}/${formattedDate}`)
      .subscribe(resp => {
        this.toastr.success('TripSchedule availability checked successfully'); 
      }, err => {
        this.toastr.error("Error checking trip schedule availability");
      });
  }
  
}
