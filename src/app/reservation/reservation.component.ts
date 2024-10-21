import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from '../Services/trip.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  constructor(private fb: FormBuilder, public tripService: TripService) { }
  ngOnInit(): void {

    this.setTicketForms(1);
  }

  numOfTickets: number[] = [1, 2, 3];
  completeData = false;
  hours: any = ["10", "11"];
  seats: any = ["10", "11"];
  genders: any = ["male", "female"];


  reservationForm: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    numberOfTickets: new FormControl(1, Validators.required),
    hour: new FormControl('', Validators.required),
    tickets: this.fb.array([])
  });

  // create forms = number of tickets

  times() {
    const n = Number(this.reservationForm.controls['numberOfTickets'].value);
    return Array(n).fill(0);

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
    console.log(this.reservationForm.value);
  }

}
