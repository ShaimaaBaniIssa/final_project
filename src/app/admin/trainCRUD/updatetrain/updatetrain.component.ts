import { Component, Inject } from '@angular/core';
import { ManagestationService } from '../../services/managestation.service';
import { ManageTrainService } from '../../services/manage-train.service';
import { StationService } from 'src/app/Services/station.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatetrain',
  templateUrl: './updatetrain.component.html',
  styleUrls: ['./updatetrain.component.css']
})
export class UpdatetrainComponent {
  constructor(
    public managetrainServices: ManageTrainService, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }
  updateTrain: FormGroup = new FormGroup({
    trainid: new FormControl(this.data.trainid),
    trainname: new FormControl(this.data.trainname),
    availability: new FormControl(this.data.availability),
    numofseats: new FormControl(this.data.numofseats),
  });


  save() {
    this.managetrainServices.updateTrain(this.updateTrain.value)
  }
}
