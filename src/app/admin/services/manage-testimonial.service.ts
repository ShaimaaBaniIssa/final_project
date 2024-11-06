import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageTestimonialService {

  constructor(private http:HttpClient,private toastr: ToastrService) { }
  unapprovedtest:any=[]
  approvedtest:any=[]


  getUnapprovedTest(){
    this.http.get('https://localhost:7019/api/Testimonial/GetUnApprovedTestimonials').subscribe((res=>{
this.unapprovedtest=res
console.log(this.unapprovedtest)
    }
  )
), (error: HttpErrorResponse) => {
  if (error.status === 403) {
    this.toastr.error("Not Authorize");

  }
  else
    this.toastr.error(error.error)
}
  }



  getApprovedTest(){
    this.http.get('https://localhost:7019/api/Testimonial/GetApprovedTestimonials').subscribe((res=>{
this.approvedtest=res
console.log(this.approvedtest)

    }
  )
), (error: HttpErrorResponse) => {
  if (error.status === 403) {
    this.toastr.error("Not Authorize");

  }
  else
    this.toastr.error(error.error)
}
  }



  deleteTest(testimonialid:any){
    this.http.delete('https://localhost:7019/api/Testimonial/DeleteTestimonial/'+testimonialid).subscribe((res=>{
      this.approvedtest=res
      this.toastr.success("Testimonial Deleted Successfuly");

          }
        )
      ), (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.toastr.error("Not Authorize");
      
        }
        else
          this.toastr.error(error.error)
      }
  }


  updateTest(body:any){
    this.http.put('https://localhost:7019/api/Testimonial/UpdateTestimonial',body).subscribe((res=>{
      this.approvedtest=res;
      this.toastr.success("Testimonial Updated Successfuly");
      window.location.reload()

          }
        )
      ), (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.toastr.error("Not Authorize");
      
        }
        else
          this.toastr.error(error.error)
      }
  }
}
