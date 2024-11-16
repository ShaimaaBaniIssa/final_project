import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../Services/testimonial.service';

@Component({
  selector: 'testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  constructor(public testimonialService: TestimonialService) { }
  testimonials: any = [];
  ngOnInit(): void {
    this.testimonialService.getTestimonials().subscribe(
      result => {
        this.testimonials = result;
      },
      error => {
        console.log("error");
      }
    );;
  }
}
