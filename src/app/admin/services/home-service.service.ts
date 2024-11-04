import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
homepages :any ={};
  constructor(private toastr: ToastrService, private httpClient: HttpClient, private rout: Router) { }
  dis_image: any;

  createHomepage(body: any) {
    console.log(body)
    this.httpClient.post('https://localhost:7019/api/HomePage/CreateHomePage', body).subscribe((res) => {
      this.toastr.success("Home Page Created successfully.");
      window.location.reload();

      // this.rout.navigate(['/admin/trip'])

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }
  updateHomePage(body: any) {
    console.log(body)
    this.httpClient.put('https://localhost:7019/api/HomePage/UpdateHomePage', body).subscribe((res) => {
      this.toastr.success("Home Page updated successfully.");
      window.location.reload();

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }
  getAllHomepages() {
    return this.httpClient.get('https://localhost:7019/api/HomePage');
// this.httpClient.get("https://localhost:7019/api/HomePage").subscribe((res)=>{
// this.homepages=res
// },err=>{
// this.toastr.error ("error")
// })


  }
  // uploadAtachment(file: FormData) {
  //   this.httpClient.post('https://localhost:7019/api/HomePage/UploadImage', file).subscribe((resp: any) => {
  //     // object from course 
  //     this.dis_image = resp.imagepath;
  //   }, (error: HttpErrorResponse) => {
  //     if (error.status === 403) {
  //       this.toastr.error("Not Authorize");

  //     }
  //     else
  //       this.toastr.error("error");
  //   })
  // }

  uploadAtachment(formData: FormData): Observable<any> { 
    
    return this.httpClient.post("https://localhost:7019/api/HomePage/UploadImage",formData)
}

}
