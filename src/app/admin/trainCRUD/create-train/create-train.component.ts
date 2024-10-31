import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagestationService } from '../../services/managestation.service';
import { ManageTrainService } from '../../services/manage-train.service';

@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrls: ['./create-train.component.css']
})
export class CreateTrainComponent {
  constructor(public managestation: ManagestationService,private managetrainService :ManageTrainService){
  
  }
  ngOnInit(): void {
    this.managestation.getAllStation();
    console.log(this.managestation.stations)
  }
 

  stationName: FormControl = new FormControl('');
  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 10;
  
 // Single marker position
 markerPosition: google.maps.LatLngLiteral | null = null;

  // create 
  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPosition = event.latLng.toJSON();

      // Update form controls with the new latitude and longitude
      this.createTrain.patchValue({
        destlatitude: this.markerPosition.lat,
        destlongitude: this.markerPosition.lng
      });

      console.log('Latitude:', this.markerPosition.lat);
      console.log('Longitude:', this.markerPosition.lng);
    }

  }
  
 // Method to remove the marker
 removeMarker() {
  this.markerPosition = null;
}



createTrain: FormGroup = new FormGroup({
  destlatitude: new FormControl(this.markerPosition?.lat, Validators.required),
  destlongitude: new FormControl(this.markerPosition?.lng, Validators.required),
  trainName: new FormControl('Enter Train Name', Validators.required), 
  availavility: new FormControl(false),
  numOfSeats: new FormControl(0,Validators.required),
});

  
save() {
  this.managetrainService.createTrain(this.createTrain.value)
}
 
}
