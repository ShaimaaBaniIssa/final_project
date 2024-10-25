import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from '../Services/trip.service';
import { ReservationService } from '../Services/reservation.service';
import { PaymentComponent } from '../payment/payment.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  constructor(private fb: FormBuilder, public tripService: TripService,
    private reservationService: ReservationService,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {

    this.setTicketForms(1);
    this.tripdata = this.tripService.selectedTrip;
  }
  tripdata: any = {};
  numOfTickets: number[] = [1, 2, 3];
  completeData = false;
  genders: any = ["male", "female"];
  @ViewChild(PaymentComponent) paymentComponent!: PaymentComponent;


  reservationForm: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    numberOfTickets: new FormControl(1, Validators.required),
    hour: new FormControl({ value: '', disabled: true }, Validators.required),
    tickets: this.fb.array([])
  });

  tripSchedules: any = [];

  selectDate() {
    this.tripService.checkTripScheduleAvailability(this.tripService.selectedTrip.tripid,
      this.reservationForm.controls['date'].value
    );
    this.reservationForm.get('hour')?.enable();

  }
  selectedSchedule: any;
  onHourChange(event: any) {
    const selectedDepartureTime = event.target.value;

    this.selectedSchedule = this.tripService.tripSchedules.find(
      (item: any) => item.departuretime === selectedDepartureTime
    );


    // console.log(event.target.value);
    // const selectedIndex = this.tripService.tripSchedules.indexOf(event.target.value);
    // console.log(selectedIndex);

    // const selectedSchedule = this.tripService.tripSchedules[selectedIndex];
    // console.log(selectedSchedule);

    this.tripService.getAvailableSeats(this.selectedSchedule.tripscheduleid)
  }
  // selectSeat(event: any) {
  //   console.log(event.target.value);

  // const selectedIndex = event.target.value;

  // const selectedSeat = this.tripService.availableSeats[selectedIndex];

  // const unAvailableSeat = selectedSeat;
  // unAvailableSeat.availability = 0;
  // this.tripService.availableSeats[selectedIndex] = {
  //   ...this.tripService.availableSeats[selectedIndex],
  //   ...unAvailableSeat
  // };

  // console.log(this.tripService.availableSeats);


  // }
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

    // Check for duplicates by creating a Set and comparing its size with the original array length
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
    console.log(body);
    this.reservationService.createReservation(body);
    this.reservationForm.reset();
    this.paymentComponent.paymentForm.reset();
  }

}
