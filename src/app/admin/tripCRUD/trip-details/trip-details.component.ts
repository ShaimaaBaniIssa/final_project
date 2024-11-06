import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { StationService } from 'src/app/Services/station.service';
import { TripService } from 'src/app/Services/trip.service';
import { ManageTripService } from '../../services/manage-trip.service';
import { ManagestationService } from '../../services/managestation.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TripDetailsComponent implements OnInit {
  constructor(
    private rout: Router, public ManageTripService: ManageTripService,
    public ManagestationService: ManagestationService

  ) { }
  ngOnInit(): void {

    this.ManagestationService.getStationTrips()
    console.log(this.ManagestationService.trips)
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

  updateTrip(trip: any) {

    this.ManageTripService.selectedTrip = { ...trip };


    this.rout.navigate(['/admin/updatetrip'])
  }


  deleteTrip(tripid: any) {
    console.log(tripid);
    this.ManageTripService.DeleteTrip(tripid);
  }

  create() {
    this.rout.navigate(['/admin/createtrip'])
  }
  Showschedule(trip: any) {

    this.ManageTripService.selectedTrip = { ...trip };
    this.rout.navigate(['/admin/tripschedule'])
  }
}
