import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ManagestationService } from '../../services/managestation.service';

@Component({
  selector: 'app-updatestation',
  templateUrl: './updatestation.component.html',
  styleUrls: ['./updatestation.component.css']
})
export class UpdatestationComponent implements OnInit {
  @Input() pData: any = {};

  
  constructor(
    public manageStationService: ManagestationService, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }
updateStation = new FormGroup({
    stationid: new FormControl(this.data.stationid, Validators.required),
    stationname: new FormControl(this.data.stationname, Validators.required),
    address: new FormControl(this.data.address),
    latitude: new FormControl(this.data.latitude),
    longitude: new FormControl(this.data.longitude),
    imagepath: new FormControl(this.data.imagepath)
  });

  ngOnInit(): void {
  }

  save() {
    console.log(this.updateStation.value);
    this.manageStationService.updateStation(this.updateStation.value);

  }

  uploadimage(file: any) {
    if (file.length == 0) return;
    let fileToUpload: File = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.manageStationService.uploadAtachment(formData);
  }
  deleteStation() {
    console.log("deeee");
    this.manageStationService.deleteStation(this.data.stationid);
  }
}
