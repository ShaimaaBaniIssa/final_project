import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  contactPage:any=[]
  message: string = '';
  isSuccess: boolean = false;
  getContactPage(){
    this.http.get('https://localhost:7019/api/Contactuspage').subscribe(result=>{
      this.contactPage=result
      console.log('get contact page susseccfuly');
    },err=>{
      console.log(err.message);
    }
  )
  }

  sendFeedBack(body:any){
    this.http.post('https://localhost:7019/api/Feedback/CreateFeedback',body).subscribe((result)=>{
      this.message = 'Your message has been sent successfully!';
    this.isSuccess = true;
    },err=>{
      this.message = 'Failed to send your message. Please try again later.';
      this.isSuccess = false;
    })
  }
}
