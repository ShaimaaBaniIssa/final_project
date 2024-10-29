import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ManagestationService } from '../services/managestation.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StationService } from 'src/app/Services/station.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class TripComponent implements OnInit {
  constructor(public managestation: ManagestationService,public stationService: StationService,
    private router: Router){}
  

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

 
 
  onStationClick(station: any) {
    this.stationService.selectedStation = { ...station };
    this.stationService.selectedStationLocation = {
      lat: station.latitude,
      lng: station.longitude
    }
    console.log(this.stationService.selectedStation);
    this.router.navigate(['/admin/tripdetails']);
  }

}
