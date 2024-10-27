import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ManagestationService } from '../../services/managestation.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CreatestationComponent } from '../createstation/createstation.component';

@Component({
  selector: 'managestations',
  templateUrl: './managestations.component.html',
  styleUrls: ['./managestations.component.css']
})
export class ManagestationsComponent implements OnInit {
  constructor(public managestation:ManagestationService,public dialog :MatDialog){}
  ngOnInit(): void {
  this.managestation.getAllStation();
  }

  stationName: FormControl = new FormControl('');

 
  searchStation() {
    this.managestation.searchStations(this.stationName.value);

  }
  markerPosition: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  markerOptions: google.maps.MarkerOptions = {
    draggable: true, // يمكن سحب العلامة
    title: 'My Marker' // عنوان اختياري
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
      data:this.markerPosition
    });

  }






  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 10; // مستوى التكبير

  onMarkerClick(station: any) {
    this.managestation.selectedStation = station;
   
  }
 

}
