import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagestationService } from '../../services/managestation.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CreatestationComponent } from '../createstation/createstation.component';
import { UpdatestationComponent } from '../updatestation/updatestation.component';


@Component({
  selector: 'managestations',
  templateUrl: './managestations.component.html',
  styleUrls: ['./managestations.component.css']
})
export class ManagestationsComponent implements OnInit {

  constructor(public managestation: ManagestationService, public dialog: MatDialog) {

  }
  pData: any = {};
  Data: any = {};


  ngOnInit(): void {
    this.managestation.getAllStation();
  }
stationName: FormControl = new FormControl('');
  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 10;
  
markerPosition: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };

  
  searchStation() {
    this.managestation.searchStations(this.stationName.value);

  }

  // create 
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
      data: this.markerPosition
    });

  }
 // for update
  onStationClick(station: any) {
    console.log(station);
    this.openUpdateDialog(station);
    // this.openDeleteDailog(station.stationid)
  }

 
  openUpdateDialog(station: any) {

    console.log(station);
    const dialogRef = this.dialog.open(UpdatestationComponent, {
      data: station
    });
  }
  onMarkerDragEnd(station: any, event: any) {

    if (event.latLng) {
      station.latitude = event.latLng.lat();
      station.longitude = event.latLng.lng();
      this.managestation.updateStation(station);
    }
  }

  

}
