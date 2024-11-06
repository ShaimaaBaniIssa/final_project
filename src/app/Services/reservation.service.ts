import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient,
    private toastr: ToastrService, private router: Router) { }
  private reservationData: any = {};

  reservationId: any;
  createReservation(body: any) {
    this.httpClient.post('https://localhost:7019/api/Reservation/CreateReservation', body).subscribe(
      (result) => {
        this.reservationId = result;
        this.toastr.success("Reservation Done Succefully")
        this.router.navigate(['reservationDetails'])
      }, (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.toastr.error("Login first, or register");

        }
        else
          this.toastr.error(error.error)
      })
  }
  getInvoices() {
    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);
    const customerId = user.customerid;
    return this.httpClient.get('https://localhost:7019/api/Reservation/GetInvoices/' + this.reservationId + '/' + customerId, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        // Create a download link for the user
        saveAs(response, 'Invoices.zip');
      }, (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.router.navigate(['/auth/register']);

        }
        else
          this.toastr.error(error.error)
      });
  }
  reportData: any = []
  MonthlyAnnualReports(month: any, year: any) {
    let params = new HttpParams();
    if (month) {
      params = params.set('month', month.toString());
    }
    params = params.set('year', year.toString());
    this.httpClient.get('https://localhost:7019/api/Reservation/MonthlyAnnualReports', { params }).subscribe(
      (resp) => {
        this.reportData = resp
      }, (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.toastr.error("Not Authorize");

        }
        else
          this.toastr.error(error.error)
      })
  }
  storeReservationData(data: any) {
    this.reservationData = data;
  }

  getReservationData() {
    return this.reservationData;
  }

}
