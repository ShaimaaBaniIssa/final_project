import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagestationService } from '../../services/managestation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-createstation',
  templateUrl: './createstation.component.html',
  styleUrls: ['./createstation.component.css']
})
export class CreatestationComponent {
  constructor(public managestationsservice: ManagestationService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  createStation: FormGroup = new FormGroup({
    stationname: new FormControl('', Validators.required),
    address: new FormControl(),
    latitude: new FormControl(this.data.lat),
    longitude: new FormControl(this.data.lng),
    imagepath: new FormControl()
  })

  save() {

    console.log(this.createStation.value);
    this.managestationsservice.createStation(this.createStation.value);
  }

  uploadimage(file: any) {
    if (file.length == 0)
      return;
    let filetoupload = <File>file[0];
    const formdata = new FormData;
    formdata.append('file', filetoupload, filetoupload.name);
    this.managestationsservice.uploadAtachment(formdata)

  }
}
