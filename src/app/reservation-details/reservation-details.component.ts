import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../Services/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  data: any = {};
  currentDateTime: Date;
  constructor(public reservationService: ReservationService) {
    this.currentDateTime = new Date();

  }
  ngOnInit(): void {
    this.data = this.reservationService.reservationData;
    console.log(this.data);
  }
  downloadInvoices() {
    this.reservationService.getInvoices();
  }
}
