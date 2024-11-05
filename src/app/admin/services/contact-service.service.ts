import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http:HttpClient,private toastr: ToastrService) { }
  contactPage:any=[]

  getContactPage(){
    this.http.get('https://localhost:7019/api/Contactuspage').subscribe(result=>{
      this.contactPage=result
      console.log('get contact page susseccfuly');
    },err=>{
      console.log(err.message);
    }
  )
  }
  updateContact(body:any){
    console.log(body);

    this.http.put('https://localhost:7019/api/Contactuspage/UpdateContactusPage',body).subscribe(result=>{
      this.contactPage=result
      window.location.reload()
      this.toastr.success("contact us Page updated successfully.");
    },err=>{
      console.log(err.message);
    }
  )
  }

  uploadAtachment(formData: FormData): Observable<any> { 
    
    return this.http.post("https://localhost:7019/api/HomePage/UploadImage",formData)
}
}
