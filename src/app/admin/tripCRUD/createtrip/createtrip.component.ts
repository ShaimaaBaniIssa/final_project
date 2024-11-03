import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ManagestationService } from '../../services/managestation.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from 'src/app/Services/trip.service';
import { ManageTripService } from '../../services/manage-trip.service';

@Component({
  selector: 'app-createtrip',
  templateUrl: './createtrip.component.html',
  styleUrls: ['./createtrip.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CreatetripComponent implements OnInit {
  constructor(public managestation: ManagestationService,
    private ManageTripService:ManageTripService){
  
  }

  stName:any={}
  station:any;
  isStationSelected:any
  ngOnInit(): void {
  
    // Retrieve the stationName from localStorage
    const storedStation = localStorage.getItem('stationName');
    
    // Check if there is a stored station in localStorage
    if (storedStation) {
      // Parse the stored station
      this.stName = JSON.parse(storedStation);
      this.isStationSelected = false; // Set to true if a station is selected
      this.station = this.stName; // Set the station to the parsed station object
  
      console.log("Retrieved Station: ", this.stName);
    } else {
      // If no station is selected, fetch all stations
      this.isStationSelected = true;
      this.managestation.getAllStation();
      this.station = this.managestation.stations;
  
      console.log("No station found. Fetching all stations: ", this.station);
    }
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
  price: new FormControl(0, Validators.required), // Default value added
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
  if(!this.isStationSelected){
    this.createTrip.controls['stationid'].setValue( this.station.stationid)
  }
  this.ManageTripService.createTrip(this.createTrip.value)
  localStorage.removeItem('stationName');
}
 
  
 
 
  
}
