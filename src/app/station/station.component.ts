import { Component, OnInit } from '@angular/core';
import { StationService } from '../Services/station.service';
import { TripService } from '../Services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestimonialService } from '../Services/testimonial.service';
import { interval, map, Observable, Subscription } from 'rxjs';
import { MapDirectionsService } from '@angular/google-maps';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  constructor(public stationService: StationService, public tripService: TripService, private router: Router
    , private testimonialService: TestimonialService,
    private mapDirectionsService: MapDirectionsService,
    private route: ActivatedRoute,
    private profileService: ProfileService,
  ) { }
  customerid: any = '';
  testimonialForm?: FormGroup;
  directionsResults$: Observable<google.maps.DirectionsResult | undefined> | undefined;
  station: any = {};
  stationId: any;
  userLocation: any;
  ngOnInit(): void {
    this.stationId = this.route.snapshot.paramMap.get('id');
    this.customerid = JSON.parse(localStorage.getItem('user') ?? '{}').customerid;

    this.testimonialForm = new FormGroup({
      customerid: new FormControl(this.customerid),
      stationid: new FormControl(''),
      rating: new FormControl('', Validators.required),
      commenttext: new FormControl('', Validators.required),
      isapprove: new FormControl(false)
    });

    if (this.stationId) {
      this.stationService.getStationById(this.stationId).subscribe(station => {
        this.station = station;
        this.testimonialForm?.patchValue({ stationid: this.station.stationid });
      });
      this.tripService.getStationTrips(this.stationId);
    }

    this.userLocation = this.profileService.getUserLocation();
    if (this.userLocation == null) {
      this.getUserLocation();
    }

    // to draw line between user location and station location
    const request = {
      destination: { lat: this.station.latitude, lng: this.station.longitude },
      origin: { lat: this.userLocation.lat ?? 0, lng: this.userLocation.lng ?? 0 },
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result));
    console.log(this.directionsResults$);
  }



  // open google map to track station road
  openGoogleMaps() {
    const url = `https://www.google.com/maps/dir/?api=1&origin=&destination=${this.station.latitude},${this.station.longitude}&travelmode=driving`;
    window.open(url, '_blank');

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
    // this.tripService.selectedTrip = { ...trip };
    this.router.navigate(['/reservation', trip.tripid]);
  }
  addTestimonial() {
    this.testimonialService.addTestimonial(this.testimonialForm!.value)
    this.testimonialForm?.reset();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.center = this.userLocation;
          console.log('User Location:', this.userLocation);
        },
        (error) => {
          console.error('Error getting location', error);

        },
        {
          enableHighAccuracy: true, //Option for higher resolution
          timeout: 10000, //Waiting time to get the location (in milliseconds)
          maximumAge: 0, // Always get the new location
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}