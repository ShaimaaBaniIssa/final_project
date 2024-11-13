import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeServiceService } from '../../services/home-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-updatehomepage',
  templateUrl: './updatehomepage.component.html',
  styleUrls: ['./updatehomepage.component.css']
})
export class UpdatehomepageComponent {
  constructor(public homepageservice: HomeServiceService, @Inject(MAT_DIALOG_DATA) public data: any, public spinner: NgxSpinnerService) {
  }
  updateHomepage: FormGroup = new FormGroup({
    homepageid: new FormControl(this.data.homepageid, Validators.required),
    logoimage: new FormControl(this.data.logoimage, Validators.required),
    websitetitle: new FormControl(this.data.websitetitle, Validators.required),
    toptext: new FormControl(this.data.toptext, Validators.required),
    formimage: new FormControl(this.data.formimage, Validators.required),
    titileabouttext: new FormControl(this.data.titileabouttext, Validators.required),
    abouttext1: new FormControl(this.data.abouttext1, Validators.required),
    abouttext2: new FormControl(this.data.abouttext2, Validators.required),
    trainlogo: new FormControl(this.data.trainlogo, Validators.required),
    pointabouttext1: new FormControl(this.data.pointabouttext1, Validators.required),
    pointabouttext2: new FormControl(this.data.pointabouttext2, Validators.required),
    desttitle: new FormControl(this.data.desttitle, Validators.required),
    desttext: new FormControl(this.data.desttext, Validators.required)
  });


  save() {
    this.homepageservice.updateHomePage(this.updateHomepage.value)
  }
  uploadimage(file: any, imagename: string) {
    if (file.length == 0)
      return;
    this.spinner.show();

    let filetoupload = <File>file[0];
    const formdata = new FormData;
    formdata.append('file', filetoupload, filetoupload.name);
    this.homepageservice.uploadAtachment(formdata).subscribe((resp: any) => {
      console.log(resp.logoimage)


      this.updateHomepage.controls[imagename].patchValue(resp.logoimage);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 3000);

    })

    console.log(this.updateHomepage.value)
  }

}
