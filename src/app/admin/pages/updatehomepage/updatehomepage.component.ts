import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeServiceService } from '../../services/home-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatehomepage',
  templateUrl: './updatehomepage.component.html',
  styleUrls: ['./updatehomepage.component.css']
})
export class UpdatehomepageComponent {
  constructor(public homepageservice: HomeServiceService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  updateHomepage: FormGroup = new FormGroup({
    homepageid: new FormControl(this.data.homepageid),
    logoimage: new FormControl(this.data.logoimage),
    websitetitle: new FormControl(this.data.websitetitle),
    toptext: new FormControl(this.data.toptext),
    formimage: new FormControl(this.data.formimage),
    titileabouttext: new FormControl(this.data.titileabouttext),
    abouttext1: new FormControl(this.data.abouttext1),
    abouttext2: new FormControl(this.data.abouttext2),
    trainlogo: new FormControl(this.data.trainlogo),
    pointabouttext1: new FormControl(this.data.pointabouttext1),
    pointabouttext2: new FormControl(this.data.pointabouttext2),
    desttitle: new FormControl(this.data.desttitle),
    desttext: new FormControl(this.data.desttext)
  });


  save() {
    this.homepageservice.updateHomePage(this.updateHomepage.value)
  }
  uploadimage(file: any) {
    if (file.length == 0)
      return;
    let filetoupload = <File>file[0];
    const formdata = new FormData;
    formdata.append('file', filetoupload, filetoupload.name);
    this.homepageservice.uploadAtachment(formdata)
  
  }
  
}
