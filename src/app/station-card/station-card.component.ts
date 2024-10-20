import { Component, Input, OnInit } from '@angular/core';
import { StationService } from '../Services/station.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.css']
})
export class StationCardComponent {
  constructor(public stationService: StationService, private router: Router){} 
  
  @Input() station: any = [];
  showStationDetails(station: any) {
    this.stationService.selectedStation = { ...station };
    console.log(this.stationService.selectedStation);
    this.router.navigate(['/station']);
  }
}

