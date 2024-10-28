import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManagestationService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  stations: any = [];
  totalStations: number = 0;
  selectedStation: any;
  dis_image: any;

  getAllStation() {
    this.httpClient.get('https://localhost:7019/api/Station')
      .subscribe(
        (result: any) => {
          this.stations = result;
          console.log(result);

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

  uploadAtachment(file: FormData) {
    this.httpClient.post('https://localhost:7019/api/Station/UploadImage', file).subscribe((resp: any) => {
      // object from course 
      this.dis_image = resp.imagepath;
    }, err => {
      console.log("error");
    })
  }
  createStation(body: any) {
    body.imagepath = this.dis_image;
    this.httpClient.post('https://localhost:7019/api/Station/CreateStation', body).subscribe(resp => {
      this.toastr.success('Station created successfuly')
      window.location.reload();

    }, err => {
      console.log("Error");
    });
  }

  updateStation(body: any) {
    if (this.dis_image != null) {
      body.imagepath = this.dis_image;
    }
    this.httpClient.put('https://localhost:7019/api/Station/UpdateStation', body).subscribe((resp) => {
      this.toastr.success('Station updated successfuly')
      window.location.reload();


    }, err => {
      console.log("erorr")
    })
  }

  deleteStation(id: number) {
    this.httpClient.delete("https://localhost:7019/api/Station/DeleteStation/" + id).subscribe(resp => {
      this.toastr.success("The Station Deleted")
      window.location.reload();
    }, err => {
      console.log("Error")

    })
  }
}
