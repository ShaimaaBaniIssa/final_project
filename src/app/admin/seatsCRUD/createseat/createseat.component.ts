import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageSeatsService } from '../../services/manage-seats.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-createseat',
  templateUrl: './createseat.component.html',
  styleUrls: ['./createseat.component.css']
})
export class CreateseatComponent {
  constructor(private seatService: ManageSeatsService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  createSeat: FormGroup = new FormGroup({
    seatnumber: new FormControl('Enter Seat Number', Validators.required),
    trainid: new FormControl(this.data, Validators.required)
  });


  save() {
    this.seatService.createSeat(this.createSeat.value)
  }
}
