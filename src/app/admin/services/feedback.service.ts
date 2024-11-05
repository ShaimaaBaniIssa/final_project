import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedback :any ={};
  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  getFeedback(){
    this.httpClient.get('https://localhost:7019/api/Feedback').subscribe(result=>{
      this.feedback=result
      console.log('get feedback susseccfuly');
    },err=>{
      console.log(err.message);
    }
  )
  }
 
 
}
