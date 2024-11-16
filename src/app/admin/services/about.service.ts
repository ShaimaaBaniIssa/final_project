import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  uploadAtachment(formData: FormData): Observable<any> { 
    
    return this.http.post("https://localhost:7019/api/HomePage/UploadImage",formData)
}
  httpClient: any;

  constructor(private http:HttpClient,private toastr: ToastrService) { }
  Aboutuspage:any=[]

  getaboutPage(){
    this.http.get('https://localhost:7019/api/Aboutuspage').subscribe(result=>{
      this.Aboutuspage =result
      console.log('get about page susseccfuly');
    },err=>{
      console.log(err.message);
    }
  )
  }
  updateabout(body:any){
    console.log(body);

    this.http.put('https://localhost:7019/api/Aboutuspage/UpdateAboutUsPage',body).subscribe(result=>{
      this.Aboutuspage=result
      window.location.reload()
      this.toastr.success("about page updated successfully.");
    },err=>{
      console.log(err.message);
    }
  )
  }
  createHomepage(body: any) {
    console.log(body)
    this.http.post('https://localhost:7019/api/Aboutuspage/CreateAboutUsPage', body).subscribe(result=>{ 
      this.toastr.success("about page Created successfully.");
      window.location.reload();

     

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }
}
