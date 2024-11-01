import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManageSeatsService } from '../../services/manage-seats.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updateseat',
  templateUrl: './updateseat.component.html',
  styleUrls: ['./updateseat.component.css']
})
export class UpdateseatComponent {
  constructor(
    private seatService: ManageSeatsService, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }
  updateSeat: FormGroup = new FormGroup({
    seatid: new FormControl(this.data.seatid),
    seatnumber: new FormControl(this.data.seatnumber),
    trainid: new FormControl(this.data.trainid)
  });


  save() {
    this.seatService.updateSeat(this.updateSeat.value)
  }
}
