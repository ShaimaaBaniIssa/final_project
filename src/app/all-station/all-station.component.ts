import { Component, OnInit } from '@angular/core';
import { StationService } from '../Services/station.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-station',
  templateUrl: './all-station.component.html',
  styleUrls: ['./all-station.component.css']
})
export class AllStationComponent implements OnInit {
  constructor(public stationService: StationService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.stationService.getAllStation();
  }
  showStationDetails(station: any) {
    this.stationService.selectedStation = { ...station };
    this.stationService.selectedStationLocation = {
      lat: station.latitude,
      lng: station.longitude
    }
    console.log(this.stationService.selectedStation);
    this.router.navigate(['/station']);
  }

}
