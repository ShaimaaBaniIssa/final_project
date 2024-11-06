import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  implements OnInit{
  
  

  constructor(public feedbackService:FeedbackService) {}
  ngOnInit(): void {
    this.feedbackService.GetAllFeedback();
  }
}