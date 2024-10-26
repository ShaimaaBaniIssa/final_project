import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('callUpdateDailog') updateDailog !:TemplateRef<any>;  
  constructor(public profile:ProfileService){}
  userData = JSON.parse(localStorage.getItem('user') ?? '{}');
  userName: string = this.userData.name ;
 
  ngOnInit() {
    console.log(this.userData.customerid);
    this.profile.getUser(this.userData.customerid)
    
    
  }
  updateUser:FormGroup=new FormGroup({
    customerid:new FormControl(),
    fname:new FormControl(),
    lname:new FormControl(),
    email:new FormControl(),
    phonenumber:new FormControl(),
    address:new FormControl(),
  })
  // pData:any=[]
  // openUpdateDailog(obj:any){
  //   this.pData=obj; 
  //   console.log(this.pData);
  //   this.customerid.controls['courseid'].setValue(this.pData.customerid)
  //   this.dialog.open(this.updateDailog)

  // }

  Save(){
    this.updateUser.controls['customerid'].setValue(this.profile.userData.customerid)
    this.profile.updateUser(this.updateUser.value);
  
  }
}