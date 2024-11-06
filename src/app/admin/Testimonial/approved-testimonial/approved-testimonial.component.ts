import { Component, OnInit } from '@angular/core';
import { ManageTestimonialService } from '../../services/manage-testimonial.service';

@Component({
  selector: 'app-approved-testimonial',
  templateUrl: './approved-testimonial.component.html',
  styleUrls: ['./approved-testimonial.component.css']
})
export class ApprovedTestimonialComponent implements OnInit{
  constructor(public testimService:ManageTestimonialService){}
 ngOnInit(): void {
     this.testimService.getApprovedTest()
 }
}
