import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  trips: any = [];
  stations: any = [];
  arr:any=[];
  selectedStation: any;
  getStationTrips() {
    
    this.httpClient.get('https://localhost:7019/api/Trip/GetTripsByStationId/' + this.selectedStation.stationid)
      .subscribe(
        result => {
          this.trips = result;
        },
        error => {
          this.toastr.error("error");
        }
      );
  }
  getAllStation() {
    this.httpClient.get('https://localhost:7019/api/Station')
      .subscribe(
        (result:any) => {
          this.stations = result;
          this.arr = result.map((item:any)=> ({
            lat: item.latitude,
            lng: item.longitude
          }));
          console.log(this.arr)
        },
        error => {
          this.toastr.error("error");
        }
      );
  }
}
