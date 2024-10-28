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

  constructor(public managestation: ManagestationService, public dialog: MatDialog) {

  }
  pData: any = {};
  Data: any = {};


  ngOnInit(): void {
    this.managestation.getAllStation();
  }

  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 10;

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
      data: this.markerPosition
    });

  }

  onStationClick(station: any) {
    console.log(station);
    this.openUpdateDialog(station);
    // this.openDeleteDailog(station.stationid)
  }

  // for update
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

  //for delete
  openDeleteDailog(id: any) {
    const dialogRef = this.dialog.open(DeletestationComponent, {
      data: id
    });
  }

}
