import { Component, Inject, Input, OnInit } from '@angular/core';
import { ManagestationService } from '../../services/managestation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from 'src/app/Services/trip.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StationService } from 'src/app/Services/station.service';

@Component({
  selector: 'app-updatetrip',
  templateUrl: './updatetrip.component.html',
  styleUrls: ['./updatetrip.component.css']
})
export class UpdatetripComponent implements OnInit {
  station:any={}
  latitude:any;
  longitude:any;
  stationid:any;
  constructor(public managestation: ManagestationService,public tripService:TripService,public stationService: StationService){
  
 
  }

  ngOnInit(): void {
    this.station=this.stationService.selectedStation
   
   console.log(this.tripService.selectedTrip)
   this.stationid= this.stationService.selectedStation.stationid
  }
 

  stationName: FormControl = new FormControl('');
  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 10;
  
 // Single marker position
 markerPosition: google.maps.LatLngLiteral | null = null;

  




updateTrip: FormGroup = new FormGroup({
  tripid:new FormControl (this.tripService.selectedTrip.tripid),
  destlatitude: new FormControl(this.stationService.selectedStationLocation.lat),
  destlongitude: new FormControl(this.stationService.selectedStationLocation.lng),
  price: new FormControl(this.tripService.selectedTrip.price),
  sunday: new FormControl(this.tripService.selectedTrip.sunday),  
  monday: new FormControl(this.tripService.selectedTrip.monday),
  tuesday: new FormControl(this.tripService.selectedTrip.tuesday),
  wednesday: new FormControl(this.tripService.selectedTrip.wednesday),
  thursday: new FormControl(this.tripService.selectedTrip.thursday),
  friday: new FormControl(this.tripService.selectedTrip.friday),
  saturday: new FormControl(this.tripService.selectedTrip.saturday),
  
  stationid: new FormControl(this.stationService.selectedStation.stationid), 
  destaddress: new FormControl(this.tripService.selectedTrip.destaddress)
});

  
save() {

  this.tripService.updateTrip(this.updateTrip.value)
}

onMarkerDragEnd( event: any) {
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
