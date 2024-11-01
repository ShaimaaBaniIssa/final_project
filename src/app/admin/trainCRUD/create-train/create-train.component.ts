import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagestationService } from '../../services/managestation.service';
import { ManageTrainService } from '../../services/manage-train.service';

@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrls: ['./create-train.component.css']
})
export class CreateTrainComponent {
  constructor(private managetrainService: ManageTrainService) {

  }

  createTrain: FormGroup = new FormGroup({
    trainname: new FormControl('Enter Train Name', Validators.required),
    numofseats: new FormControl('', Validators.required),
  });


  save() {
    this.managetrainService.createTrain(this.createTrain.value)
  }

}
