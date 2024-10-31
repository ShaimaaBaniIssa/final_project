import { Component } from '@angular/core';
import { ReservationService } from '../Services/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent {
  constructor(public reservationService: ReservationService) { }
  downloadInvoices() {
    this.reservationService.getInvoices();
  }
}
