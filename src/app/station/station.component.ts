import { Component, OnInit } from '@angular/core';
import { StationService } from '../Services/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  constructor(public stationService: StationService) { }
  ngOnInit(): void {
    this.stationService.getStationTrips();
  }
  showDays(trip: any) {
    const isWeekday = trip.monday && trip.tuesday && trip.wednesday && trip.thursday && trip.sunday;
    const isWeekend = trip.saturday && trip.friday;
    const days: string[] = [];
    if (isWeekday && isWeekend) {
      days.push('All Days');
      return days;

    } else if (isWeekday) {
      days.push('Weekday');
      return days;

    } else if (isWeekend) {
      days.push('Weekend');
      return days;
    } else {
      if (trip.sunday) days.push('Sunday');
      if (trip.monday) days.push('Monday');
      if (trip.tuesday) days.push('Tuesday');
      if (trip.wednesday) days.push('Wednesday');
      if (trip.thursday) days.push('Thursday');
      if (trip.friday) days.push('Friday');
      if (trip.saturday) days.push('Saturday');
      return days;

    }


  }

}
