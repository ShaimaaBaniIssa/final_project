import { Component, Inject } from '@angular/core';
import { ManageSeatsService } from '../../services/manage-seats.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteseat',
  templateUrl: './deleteseat.component.html',
  styleUrls: ['./deleteseat.component.css']
})
export class DeleteseatComponent {
  constructor(
    private seatService: ManageSeatsService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  deleteSeat() {
    this.seatService.deleteSeat(this.data);
  }
}
