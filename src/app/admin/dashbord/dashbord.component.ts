import { Component,ViewEncapsulation , OnInit } from '@angular/core';
import { StationService } from 'src/app/Services/station.service';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DashbordComponent implements OnInit {
  totalStations: number = 0; 

  constructor(public stationService: StationService,public AuthService: AuthService ) { }

  ngOnInit(): void {
    this.stationService.getTotalStations();
    this.AuthService.getTotalUsers();
    this.stationService.getAllStation();
  }
}
