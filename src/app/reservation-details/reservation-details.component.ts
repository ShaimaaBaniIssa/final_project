import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../Services/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservationData: any = {};
  constructor(public reservationService: ReservationService) { }
  ngOnInit(): void {
    this.reservationData = this.reservationService.getReservationData();
  }
  downloadInvoices() {
    this.reservationService.getInvoices();
  }
}
