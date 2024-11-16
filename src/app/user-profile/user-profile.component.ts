import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('callUpdateDialog') updateDailog !: TemplateRef<any>;
  constructor(public profile: ProfileService, public dialog: MatDialog) { }
  userData = JSON.parse(localStorage.getItem('user') ?? '{}');
  userName: string = this.userData.name;

  ngOnInit() {
    console.log(this.userData.customerid);
    this.profile.getUser()


  }
  updateUser: FormGroup = new FormGroup({
    customerid: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    phonenumber: new FormControl(),
    address: new FormControl(),
  })
  pData: any = {}
  openUpdateDailog(obj: any) {
    this.pData = obj
    console.log(this.pData);
    this.updateUser.controls['customerid'].setValue(this.pData.customerid)
    this.dialog.open(this.updateDailog, {
      width: '600px'
    })

  }

  Save() {
    this.updateUser.controls['customerid'].setValue(this.profile.userData.customerid)
    this.profile.updateUser(this.updateUser.value);

  }
}