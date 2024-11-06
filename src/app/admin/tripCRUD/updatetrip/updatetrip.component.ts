import { Component, Inject, Input, OnInit } from '@angular/core';
import { ManagestationService } from '../../services/managestation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from 'src/app/Services/trip.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StationService } from 'src/app/Services/station.service';
import { ManageTripService } from '../../services/manage-trip.service';

@Component({
  selector: 'app-updatetrip',
  templateUrl: './updatetrip.component.html',
  styleUrls: ['./updatetrip.component.css']
})
export class UpdatetripComponent implements OnInit {
  station: any = {}
  latitude: any;
  longitude: any;
  stationid: any;
  constructor(public managestation: ManagestationService, public ManageTripService: ManageTripService) {


  }

  ngOnInit(): void {
    this.station = this.managestation.selectedStation

    console.log(this.ManageTripService.selectedTrip)
    this.stationid = this.managestation.selectedStation.stationid
  }


  stationName: FormControl = new FormControl('');
  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 10;

  // Single marker position
  markerPosition: google.maps.LatLngLiteral | null = null;






  updateTrip: FormGroup = new FormGroup({
    tripid: new FormControl(this.ManageTripService.selectedTrip.tripid),
    destlatitude: new FormControl(this.managestation.selectedStationLocation.latitude),
    destlongitude: new FormControl(this.managestation.selectedStationLocation.longitude),
    price: new FormControl(this.ManageTripService.selectedTrip.price),
    sunday: new FormControl(this.ManageTripService.selectedTrip.sunday),
    monday: new FormControl(this.ManageTripService.selectedTrip.monday),
    tuesday: new FormControl(this.ManageTripService.selectedTrip.tuesday),
    wednesday: new FormControl(this.ManageTripService.selectedTrip.wednesday),
    thursday: new FormControl(this.ManageTripService.selectedTrip.thursday),
    friday: new FormControl(this.ManageTripService.selectedTrip.friday),
    saturday: new FormControl(this.ManageTripService.selectedTrip.saturday),

    stationid: new FormControl(this.managestation.selectedStation.stationid),
    destaddress: new FormControl(this.ManageTripService.selectedTrip.destaddress)
  });


  save() {

    this.ManageTripService.updateTrip(this.updateTrip.value)
  }

  onMarkerDragEnd(event: any) {
    console.log(this.station.latitude)
    if (event.latLng) {
      this.station.latitude = event.latLng.lat();
      this.station.longitude = event.latLng.lng();
      this.managestation.updateStation(this.station);
    }
    console.log(this.station.latitude)
  }



  // Method to remove the marker
  removeMarker() {
    this.markerPosition = null;
  }




}
