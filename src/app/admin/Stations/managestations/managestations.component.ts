import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagestationService } from '../../services/managestation.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CreatestationComponent } from '../createstation/createstation.component';
import { UpdatestationComponent } from '../updatestation/updatestation.component';
import { DeletestationComponent } from '../deletestation/deletestation.component';

@Component({
  selector: 'managestations',
  templateUrl: './managestations.component.html',
  styleUrls: ['./managestations.component.css']
})
export class ManagestationsComponent implements OnInit {
  
  constructor( public managestation:ManagestationService,public dialog :MatDialog){
  
  }
  pData : any={};
 Data:any={};

  
  ngOnInit(): void {
    this.managestation.getAllStation();
  }

  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 10; 
  onMarkerClick(station: any) {
    this.managestation.selectedStation = station;
   
  }
  stationName: FormControl = new FormControl('');

 
  searchStation() {
    this.managestation.searchStations(this.stationName.value);

  }
  markerPosition: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  markerOptions: google.maps.MarkerOptions = {
    draggable: true, 
    title: 'My Marker' 
  };
  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
        
      };
      
      this.openCreateDialog();
    }
  }
  
  

  openCreateDialog() {

    const dialogRef = this.dialog.open(CreatestationComponent, {
      data:this.markerPosition
    });

  }
 

  // for update
  onStationClick(station: any) {
    this.pData=station;
    console.log(this.pData.stationid)
    
    // this.openUpdateDialog(this.pData);
    this.openDeleteDailog(this.pData.stationid)
  }
  
  openUpdateDialog(station: any) {
    this.Data=station;
    this.managestation.dis_image = this.Data.imagepath; 

    this.managestation.updatestations.controls['stationid'].setValue(this.Data.stationid); 
  
    const dialogRef = this.dialog.open(UpdatestationComponent, {
      data: this.Data
    });
 
   
  }



  //for delete
  openDeleteDailog(id:any){
    this.Data.stationid=id;
    const  dialogRef = this.dialog.open(DeletestationComponent, {
      data: this.Data.stationid
    });
  }

}
