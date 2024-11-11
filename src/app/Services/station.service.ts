import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  stations: any = [];

  getAllStation() {
    this.httpClient.get('https://localhost:7019/api/Station')
      .subscribe(
        (result: any) => {
          this.stations = result;
        },
        error => {
          this.toastr.error("error");
        }
      );
  }
  getStationById(id: any): Observable<any | undefined> {
    if (!this.stations.length) {
      return this.httpClient.get(`https://localhost:7019/api/Station/GetStationById/${id}`);
    }

    const station = this.stations.find((st: any) => st.stationid == id);
    return of(station);
  }
  searchStations(stationname: string) {
    this.httpClient.get('https://localhost:7019/api/Station/SearchStation/' + stationname)
      .subscribe(
        (result: any) => {
          this.stations = result;

        },
        error => {
          this.toastr.error("error");
        }
      );
  }


}