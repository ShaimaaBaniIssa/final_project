import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  selectedTrip: any = {};
}
