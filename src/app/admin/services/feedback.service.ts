import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  Feedback :any ={};
  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  GetAllFeedback(){
    this.httpClient.get('https://localhost:7019/api/Feedback').subscribe(result=>{
      this.Feedback=result
      console.log('get feedback susseccfuly');
    },err=>{
      console.log(err.message);
    }
  )
  }
 
 
}
