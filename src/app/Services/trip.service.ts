import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient,private rout:Router) { }


  selectedTrip: any = {};

  tripSchedules: any = [];
  availableSeats: any = [];


  createTrip(body:any){
    console.log(body)
this.httpClient.post('https://localhost:7019/api/Trip/CreateTrip',body).subscribe((res)=>{
  this.toastr.success("Trip Created successfully.");
  this.rout.navigate(['/admin/trip'])

},err=>{
  console.log(err)
 
})
  }


  updateTrip(body:any){
    console.log(body)
    this.httpClient.put('https://localhost:7019/api/Trip/UpdateTrip',body).subscribe((res)=>{
      this.toastr.success("Trip updated successfully.");
      this.rout.navigate(['/admin/trip'])
    
    },err=>{
      console.log(err)
     
    })
  }
  DeleteTrip(id: number) {
    this.httpClient.delete("https://localhost:7019/api/Trip/DeleteTrip/" + id).subscribe(resp => {
      this.toastr.success("The Trip Deleted")
    }, err => {
      this.toastr.error("can't Trip this station")

    })
  }
  
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


}
