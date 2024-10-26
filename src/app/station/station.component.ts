import { Component, OnInit } from '@angular/core';
import { StationService } from '../Services/station.service';
import { TripService } from '../Services/trip.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestimonialService } from '../Services/testimonial.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  constructor(public stationService: StationService, private tripService: TripService, private router: Router
    , private testimonialService: TestimonialService
  ) { }
  customerid: any = '';
  testimonialForm?: FormGroup;

  ngOnInit(): void {
    this.stationService.getStationTrips();

    this.customerid = JSON.parse(localStorage.getItem('user') ?? '{}').customerid;

    this.testimonialForm = new FormGroup(
      {
        customerid: new FormControl(this.customerid),
        stationid: new FormControl(this.stationService.selectedStation.stationid),
        rating: new FormControl('', Validators.required),
        commenttext: new FormControl('', Validators.required)

      }
    )
  }


  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 8; // مستوى التكبير
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
  bookTrip(trip: any) {
    this.tripService.selectedTrip = { ...trip };
    this.router.navigate(['reservation']);
  }
  addTestimonial() {
    this.testimonialService.addTestimonial(this.testimonialForm!.value)
    this.testimonialForm?.reset();
  }
}
