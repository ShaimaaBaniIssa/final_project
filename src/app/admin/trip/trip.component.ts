import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ManagestationService } from '../services/managestation.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class TripComponent implements OnInit {
  constructor(public managestation: ManagestationService,
    private router: Router) { }


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
    this.managestation.selectedStation = { ...station };
    localStorage.setItem('stationName', JSON.stringify(this.managestation.selectedStation));
    localStorage.setItem('stationid', station.stationid)
    this.managestation.selectedStationLocation = {
      lat: station.latitude,
      lng: station.longitude
    }
    console.log(this.managestation.selectedStation);
    this.router.navigate(['/admin/tripdetails']);
  }

}
