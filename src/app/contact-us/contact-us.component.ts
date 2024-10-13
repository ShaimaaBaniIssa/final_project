import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  BannerImage:string=""
  HeadingImage:string="../../assets/Home/img/about-img-1.png"
  Heading:string="Stay on Track with Train Tracker";
  Subheading:string="Our team is dedicated to providing accurate train tracking information and ensuring your journey runs smoothly. Reach out for any questions or assistance regarding our services.";
  QuoteBox:string="The journey is just as important as the destination. We're here to help you every step of the way.";
  Icon="../../assets/Home/img/icon-plane.png";
  IconText1:string="Track real-time train locations";
  IconText2:string="We assist with schedule and route inquiries";
  MiddelImage:string="../../assets/Home/img/map-img.png";
  ContactFormImage:string="../../assets/Home/img/contact-img.png";
  namePlaceholder:string="Enter Your Name";
  emailPlaceholder:string="Enter Your Email";
  messagePlaceholder:string="Enter Your Message"

  contactForm = {
    name: '',
    email: '',
    message: ''
  };
  message: string = '';
  isSuccess: boolean = false;
  sendMessage(){
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };



    this.message = 'Your message has been sent successfully!';
    this.isSuccess = true;
  }
}
