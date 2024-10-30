import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  tripsearch: any = [];
 

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

 
  
}
