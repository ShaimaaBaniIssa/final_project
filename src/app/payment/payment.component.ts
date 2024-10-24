import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentForm: FormGroup = new FormGroup({
    cardnumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    cardholdername: new FormControl('', Validators.required),
    expirydate: new FormControl('', [
      Validators.required,
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{3,4}$/)  // Pattern for CVC (3 or 4 digits)
    ]),
    cardtype: new FormControl('credit', Validators.required)
  });

}
