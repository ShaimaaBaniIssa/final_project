import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageSchdualService {

  constructor(private toastr: ToastrService,private httpClient:HttpClient,private rout:Router ) { }
  tripschedule: any = [];
  allTrains:any=[]
  getAllTrains(){
    this.httpClient.get('https://localhost:7019/api/Train').subscribe((result)=>{
this.allTrains=result
console.log(this.allTrains)
    },err=>{
      console.log(err)
    })
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

  getTripScheduleById(tripId: number) {
    console.log("tripId"+tripId)
    this.httpClient.get("https://localhost:7019/api/TripSchedule/GetTripScheduleByTripId/" + tripId).subscribe(resp => {
      this.tripschedule= resp;

    }, err => {
      this.toastr.error("err")

    })
  }
  CreateTripSchedule(body: any) {
  console.log(body)
    this.httpClient.post('https://localhost:7019/api/TripSchedule/CreateTripSchedule', body).subscribe(resp => {
      this.toastr.success('TripSchedule created successfuly')
      this.rout.navigate(['/admin/tripschedule']);
    }, err => {
      if (err.error) {
        this.toastr.error(err.error); 
        this.rout.navigate(['/admin/CreateSchdual']);
      } else {
        this.toastr.error("An unexpected error occurred. Please try again.");
      }
    });
  }

  deleteTripSchedule(id: number) {
    this.httpClient.delete("https://localhost:7019/api/TripSchedule/DeleteTripSchedule/" + id).subscribe(resp => {
      this.toastr.success("The TripSchedule Deleted")
      window.location.reload();
    }, err => {
      this.toastr.error("can't delete this station")

    })

}
}