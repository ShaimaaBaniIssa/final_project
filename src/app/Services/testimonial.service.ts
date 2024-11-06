import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }

  testimonials: any = [];
  getTestimonials() {

    this.httpClient.get('https://localhost:7019/api/Testimonial/GetApprovedTestimonials')
      .subscribe(
        result => {
          this.testimonials = result;
        },
        error => {
          this.toastr.error("error");
        }
      );
  }
  addTestimonial(body: any) {
    this.httpClient.post('https://localhost:7019/api/Testimonial/CreateTestimonial', body).subscribe((result) => {
      this.toastr.success("testimonial added Succefully")
    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Login first, or register");

      }
      else
        this.toastr.error(error.error)
    })
  }
}
