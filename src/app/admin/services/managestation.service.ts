import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManagestationService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  stations: any = [];
  totalStations: number = 0;
  selectedStation: any;
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
         

        },
        error => {
          this.toastr.error("error");
        }
      );
  }
  dis_image :any ;
uploadAtachment(file:FormData){
this.httpClient.post('https://localhost:7019/api/Station/UploadImage',file).subscribe((resp:any)=>{
  // object from course 
this.dis_image=resp.imagename;
},err=>{
console.log("error");
})
}
createstation(body: any) {
  body.imagename=this.dis_image;
    this.httpClient.post('https://localhost:7019/api/Station/CreateStation', body).subscribe(resp => {
        console.log("The Stition Created");
    }, err => {
        console.log("Error");
    });
    window.location.reload();
}
}
