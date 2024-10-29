import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ManagestationService } from '../../services/managestation.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from 'src/app/Services/trip.service';

@Component({
  selector: 'app-createtrip',
  templateUrl: './createtrip.component.html',
  styleUrls: ['./createtrip.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CreatetripComponent implements OnInit {
  constructor(public managestation: ManagestationService,private trip:TripService){
  
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
      this.createTrip.patchValue({
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



createTrip: FormGroup = new FormGroup({
  destlatitude: new FormControl(this.markerPosition?.lat, Validators.required),
  destlongitude: new FormControl(this.markerPosition?.lng, Validators.required),
  price: new FormControl(null, Validators.required), // Default value added
  sunday: new FormControl(false),  // Use booleans (false instead of 0)
  monday: new FormControl(false),
  tuesday: new FormControl(false),
  wednesday: new FormControl(false),
  thursday: new FormControl(false),
  friday: new FormControl(false),
  saturday: new FormControl(false),
  stationid: new FormControl(null), // Default value added
  destaddress: new FormControl('Enter Destination Address', Validators.required)
});

  
save() {
  this.trip.createTrip(this.createTrip.value)
}
 
  
 
 
  
}
