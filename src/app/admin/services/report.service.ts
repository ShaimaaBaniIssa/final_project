import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  tripsearch: any = [];
  
  SearchTrip(startDate?: string, endDate?: string) {
    let url = 'https://localhost:7019/api/TripSchedule/SearchTrip';
  
    
    if (startDate && endDate) {
      url += `?startDate=${startDate}&endDate=${endDate}`;
    } else if (startDate) {
      url += `?startDate=${startDate}`;
    } else if (endDate) {
      url += `?endDate=${endDate}`;
    }
  
    this.httpClient.get(url)
      .subscribe(
        result => {
          this.tripsearch = result;
          console.log(result);
        },
        error => {
          console.log(error.message);
          this.toastr.error("Error occurred while fetching trips.");
        }
      );
  }
  
 
  
}
