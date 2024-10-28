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

  // updatestations = new FormGroup({
  //   stationid: new FormControl(Validators.required),
  //   stationname: new FormControl( Validators.required),
  //   address: new FormControl(),
  //   latitude: new FormControl(),
  //   longitude: new FormControl(),
  //   imagepath: new FormControl()
  // });

  constructor(
    public managestationsservice: ManagestationService, public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  save() {
  
      this.managestationsservice.updatestation(this.managestationsservice.updatestations.value);
     
  }

  uploadimage(file: any) {
    if (file.length == 0) return;
    let fileToUpload: File = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.managestationsservice.uploadAtachment(formData);
  }
}
