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
  dis_image :any ;
  updatestations = new FormGroup({
    stationid: new FormControl(Validators.required),
    stationname: new FormControl( Validators.required),
    address: new FormControl(),
    latitude: new FormControl(),
    longitude: new FormControl(),
    imagepath: new FormControl()
  });
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

updatestation(body :any){
  body.imagename=this.dis_image;
  this.httpClient.put('https://localhost:7033/api/Course/UpdateStation',body).subscribe((resp)=>{
    console.log('updeted')
    
  },err=>{
   console.log("erorr")
  })
}

deleteCourse(id:number){
  this.httpClient.delete("https://localhost:7019/api/Station/DeleteStation/"+id).subscribe(resp=>{
    console.log("The Course Deleted")
  },err=>{
  console.log("Error")
  window.location.reload();
  })
    }
}
