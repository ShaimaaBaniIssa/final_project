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
  // positions: any = [];
  selectedStation: any;
  selectedStationLocation: any;
  totalStations: number = 0;
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
        (result: any) => {
          this.stations = result;
          // this.positions = result.map((item: any) => ({
          //   lat: item.latitude,
          //   lng: item.longitude
          // }));
        },
        error => {
          this.toastr.error("error");
        }
      );
  }
  getTotalStations() {
    this.httpClient.get('https://localhost:7019/api/Station/StationCount')
      .subscribe(
        (result: any) => {
          this.totalStations = result;
        },
        error => {
          this.toastr.error("error");
        }
      );
  }
  searchStations(stationname: string) {
    this.httpClient.get('https://localhost:7019/api/Station/SearchStation/' + stationname)
      .subscribe(
        (result: any) => {
          this.stations = result;
          // this.positions = result.map((item: any) => ({
          //   lat: item.latitude,
          //   lng: item.longitude
          // }));

        },
        error => {
          this.toastr.error("error");
        }
      );
  }


}