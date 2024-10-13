import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 
  aboutUsTitle = "See Destinations You’ll Love To Visit";
  aboutUsDescription = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.";
  mainImage = "../../assets/Home/img/about-img-7.png";
  Icon="../../assets/Home/img/about-img-1.png";

  projectname="Train Tracker";
  name="Team member";
 image ="../../assets/Home/img/Team.png";
 postion = "Full Stack Developer";
 personalText ="I’ll will help you to build strategy from scratch till deliver";
  features = [
    {
      title: "Book With Confidence",
      description: "Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation.",
      image: "../../assets/Home/img/about-img-8.png"
    },
    {
      title: "Freedom to discover",
      description: "Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation.",
      image: "../../assets/Home/img/about-img-9.png"
    },
    {
      title: "Weather Vultures",
      description: "Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation.",
      image: "../../assets/Home/img/about-img-10.png"
    }
  ];
  testimonials = [
    {
      name: "Ahmad Alserhan",
      role: "FULL STACK",
      image: "../../assets/Home/img/user-img-1.png",
      rating: 5,
      text: "As a seasoned traveler, I can confidently say that this agency is one of the best I've worked with."
    },
    {
      name: "Rawan TAANI",
      role: "Customer",
      image: "../../assets/Home/img/user-img-2.png",
      rating: 5,
      text: "Tourice made my vacation a dream come true. I'll definitely be using their services again."
    },
    {
      name: "Yildiz Selin",
      role: "Customer",
      image: "../../assets/Home/img/user-img-3.png",
      rating: 5,
      text: "I had an amazing experience with Tourice. Highly recommended!"
    }
  ];
 

}
 

