import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient, private router: Router) { }

  getTestimonials() {

    return this.httpClient.get('https://localhost:7019/api/Testimonial/GetApprovedTestimonials');

  }
  addTestimonial(body: any) {
    this.httpClient.post('https://localhost:7019/api/Testimonial/CreateTestimonial', body).subscribe((result) => {
      this.toastr.success("testimonial added Succefully")
    }, (error: HttpErrorResponse) => {
      if (error.status === 403 || error.status == 401) {
        this.router.navigate(['/auth/login']);
        this.toastr.warning("login/register first");


      }
      else
        this.toastr.error("error");

    })
  }
}
