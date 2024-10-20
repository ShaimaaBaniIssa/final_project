import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Services/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public contact:ContactService){}
  ngOnInit(): void {
    this.contact.getContactPage();
  }

  namePlaceholder:string="Enter Your Name";
  emailPlaceholder:string="Enter Your Email";
  messagePlaceholder:string="Enter Your Message"
   createFeedBack:FormGroup=new FormGroup({
    name: new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('',Validators.required),
   })
  
 
  sendMessage(){
    this.contact.sendFeedBack(this.createFeedBack.value)
    this.createFeedBack.reset();
   


    
  }
}
