import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AboutService } from '../../services/about.service';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-aboutuspage',
  templateUrl: './aboutuspage.component.html',
  styleUrls: ['./aboutuspage.component.css']
})
export class AboutuspageComponent {
  @ViewChild('callUpdateDialog') updateDailog !: TemplateRef<any>;
  constructor(public About:AboutService,public dialog: MatDialog,public spinner :NgxSpinnerService ){}
  ngOnInit(): void {
    this.About.getaboutPage();
  }
  updateAboutP: FormGroup = new FormGroup({
    about_Id: new FormControl(),
    about_Image: new FormControl(''),
    about_Title: new FormControl(''),
    about_Text: new FormControl(''),
    point_Img_1: new FormControl(''),
    img_1: new FormControl(''),
    point_Img_2: new FormControl(''),
    img_2: new FormControl(''),
    point_Img_3: new FormControl(''),
    img_3: new FormControl('')
  });

  pData: any = {}
  openUpdateDailog(obj: any) {
    this.pData = obj
    console.log(this.pData)
    console.log(obj)
    this.updateAboutP.patchValue(this.pData);

    this.updateAboutP.controls['about_Id'].setValue(this.pData.about_Id)

    this.dialog.open(this.updateDailog, {
      width: '600px'
    })
  }
  
  uploadImage(file: FileList, imageName: string) {
    if (!file || file.length === 0) return;

    this.spinner.show();
    const fileToUpload = file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.About.uploadAtachment(formData).subscribe(
      (resp: any) => {
        console.log(resp.logoimage);
        this.updateAboutP.controls[imageName].patchValue(resp.logoimage); 
        this.spinner.hide();
      },
      (error: any) => {
        console.error('Upload failed:', error);
        this.spinner.hide(); 
      }
    );

    console.log(this.updateAboutP.value);
  }

  onFileChange(event: any, imageName: string) {
    const fileList: FileList = event.target.files;
    this.uploadImage(fileList, imageName);
  }
  updateAbout() {
    this.About.updateabout(this.updateAboutP.value);
    console.log('Updated About:', this.updateAboutP.value);
  }
}
