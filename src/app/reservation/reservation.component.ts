import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from '../Services/trip.service';
import { ReservationService } from '../Services/reservation.service';
import { PaymentComponent } from '../payment/payment.component';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  constructor(private fb: FormBuilder, public tripService: TripService,
    private reservationService: ReservationService,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.setTicketForms(1);
    this.tripdata = this.tripService.selectedTrip;
    this.tripService.getTripScheduleById(this.tripService.selectedTrip.tripid)
  }
  tripdata: any = {};
  numOfTickets: number[] = [1, 2, 3];
  genders: any = ["male", "female"];
  @ViewChild(PaymentComponent) paymentComponent!: PaymentComponent;


  reservationForm: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    numberOfTickets: new FormControl(1, Validators.required),
    hour: new FormControl({ value: '', disabled: true }, Validators.required),
    tickets: this.fb.array([])
  });


  tripSchedulesForThisDate: any = [];
  selectDate() {
    this.tripSchedulesForThisDate = this.tripService.tripSchedules.filter(
      (item: any) => this.datePipe.transform(item.tdate, 'yyyy-MM-dd') === this.reservationForm.controls['date'].value
    ) || [];
    console.log(this.tripSchedulesForThisDate);
    if (this.tripSchedulesForThisDate == null || this.tripSchedulesForThisDate.length == 0) {
      this.toastr.warning("no trip in this date");
      return;
    }
    this.reservationForm.get('hour')?.enable();

  }
  selectedSchedule: any;
  onHourChange(event: any) {
    const selectedDepartureTime = event.target.value;
    this.selectedSchedule = this.tripService.tripSchedules.find(
      (item: any) => item.departuretime === selectedDepartureTime
    );
    this.tripService.getAvailableSeats(this.selectedSchedule.tripscheduleid)
  }

  changeNumOfTickets() {
    const num = this.reservationForm.controls['numberOfTickets'].value;
    this.setTicketForms(num);
  }

  get tickets(): FormArray {
    return this.reservationForm.get('tickets') as FormArray;
  }
  createTicket(): FormGroup {
    return this.fb.group({
      seatid: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      nationalid: new FormControl('', Validators.required),
      dateofbirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),

    });
  }
  setTicketForms(num: number) {
    const ticketsFormArray = this.tickets; // get tickets array from reservationForm
    ticketsFormArray.clear();  // clear the existing ticket forms

    for (let i = 0; i < num; i++) {
      ticketsFormArray.push(this.createTicket());
    }
  }
  submit() {
    const selectedSeats = this.reservationForm.controls['tickets'].value.map(
      (ticket: any) => ticket.seatid
    );

    // Check for seat duplicates 
    const uniqueSeats = new Set(selectedSeats);
    if (uniqueSeats.size !== selectedSeats.length) {
      this.toastr.warning('You have selected the same seat more than once. Please choose different seats.');
      return;
    }

    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);
    const paymentFormValues = this.paymentComponent.paymentForm.value;
    const body: any = {
      tripId: this.tripService.selectedTrip.tripid,
      tripScheduleId: this.selectedSchedule.tripscheduleid,
      customerId: user.customerid,
      reservationDate: this.reservationForm.controls['date'].value,
      tickets: this.reservationForm.controls['tickets'].value,
      bankcard: paymentFormValues
    };
    this.reservationService.storeReservationData(body);
    this.reservationService.createReservation(body);
    this.reservationForm.reset();
    this.paymentComponent.paymentForm.reset();
    this.router.navigate(['reservationDetails'])
  }

}
