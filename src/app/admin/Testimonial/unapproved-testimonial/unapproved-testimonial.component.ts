import { Component, Input, OnInit } from '@angular/core';
import { ManageTestimonialService } from '../../services/manage-testimonial.service';

@Component({
  selector: 'app-unapproved-testimonial',
  templateUrl: './unapproved-testimonial.component.html',
  styleUrls: ['./unapproved-testimonial.component.css']
})
export class UnapprovedTestimonialComponent implements OnInit{
  constructor(public testimService:ManageTestimonialService){}
 ngOnInit(): void {
     this.testimService.getUnapprovedTest()
 }

  approveTestimonial(body:any) {

    const updatedTestimonial = {
      testimonialid: body.testimonialid,
      customerid:body.customerid,
      stationid: body.stationid,
      rating: body.rating,
      commenttext: body.commenttext,
      isapprove:true
    };
this.testimService.updateTest(updatedTestimonial)
   
  }

  deleteTestimonial(testimonialId:any) {
    this.testimService.deleteTest(testimonialId);
   
}}
