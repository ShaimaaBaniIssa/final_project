import { Component } from '@angular/core';
import { ManagestationService } from '../../services/managestation.service';
import { ManageTrainService } from '../../services/manage-train.service';
import { StationService } from 'src/app/Services/station.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatetrain',
  templateUrl: './updatetrain.component.html',
  styleUrls: ['./updatetrain.component.css']
})
export class UpdatetrainComponent {
  station:any={}
  latitude:any;
  longitude:any;
  stationid:any;
  constructor(public managestation: ManagestationService,public managetrainServices:ManageTrainService,public stationService: StationService){

  }
  ngOnInit(): void {
    this.station=this.stationService.selectedStation
   
   console.log(this.managetrainServices.selectedTrain)
   this.stationid= this.stationService.selectedStation.stationid
  }
 

  stationName: FormControl = new FormControl('');
  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 10;
  
 // Single marker position
 markerPosition: google.maps.LatLngLiteral | null = null;

  




updateTrain: FormGroup = new FormGroup({
  trainid:new FormControl (this.managetrainServices.selectedTrain.trainid),
  destlatitude: new FormControl(this.stationService.selectedStationLocation.lat),
  destlongitude: new FormControl(this.stationService.selectedStationLocation.lng),
  trainName: new FormControl(this.managetrainServices.selectedTrain.trainname), 
  availavility: new FormControl(this.managetrainServices.selectedTrain.availavility),
  numOfSeats: new FormControl(this.managetrainServices.selectedTrain.numofseats),
  
  stationid: new FormControl(this.stationService.selectedStation.stationid), 
  destaddress: new FormControl(this.managetrainServices.selectedTrain.destaddress)
});

  
save() {

  this.managetrainServices.updateTrain(this.updateTrain.value)
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
