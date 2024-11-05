import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactServiceService } from '../../services/contact-service.service';

@Component({
  selector: 'app-contactuspage',
  templateUrl: './contactuspage.component.html',
  styleUrls: ['./contactuspage.component.css']
})
export class ContactuspageComponent {
  @ViewChild('callUpdateDialog') updateDailog !: TemplateRef<any>;
  constructor(public contact:ContactServiceService,public dialog: MatDialog,public spinner :NgxSpinnerService ){}
  ngOnInit(): void {
    this.contact.getContactPage();
  }
  updateContactP: FormGroup = new FormGroup({
    id: new FormControl(),
    headingimage: new FormControl(),
    heading: new FormControl(),
    subheading: new FormControl(),
    quotebox: new FormControl(),
    icon: new FormControl(),
    icontext1: new FormControl(),
    icontext2: new FormControl(),
    contactformimage: new FormControl(),
    email: new FormControl(),
    phonenumber: new FormControl()
  });

  
  pData: any = {}
  openUpdateDailog(obj: any) {
    this.pData = obj
    this.updateContactP.patchValue(this.pData);

    this.updateContactP.controls['id'].setValue(this.pData.id)

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

    this.contact.uploadAtachment(formData).subscribe(
      (resp: any) => {
        console.log(resp.logoimage);
        this.updateContactP.controls[imageName].patchValue(resp.logoimage); 
        this.spinner.hide();
      },
      (error) => {
        console.error('Upload failed:', error);
        this.spinner.hide(); 
      }
    );

    console.log(this.updateContactP.value);
  }

  onFileChange(event: any, imageName: string) {
    const fileList: FileList = event.target.files;
    this.uploadImage(fileList, imageName);
  }

  updateContact() {
  
    this.contact.updateContact(this.updateContactP.value)
    console.log('Updated Contact:', this.updateContactP.value);
    
  }
 


}
