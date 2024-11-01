import { Component, Inject } from '@angular/core';
import { ManageTrainService } from '../../services/manage-train.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-train',
  templateUrl: './delete-train.component.html',
  styleUrls: ['./delete-train.component.css']
})
export class DeleteTrainComponent {
  constructor(public trainService: ManageTrainService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  deleteTrain() {
    console.log("deeee");
    this.trainService.DeleteTrain(this.data);
  }
}
