import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient,
    private toastr: ToastrService,) { }
    private reservationData: any = {};

  reservationId: any;
  createReservation(body: any) {
    this.httpClient.post('https://localhost:7019/api/Reservation/CreateReservation', body).subscribe(
      (result) => {
        this.reservationId = result;
        this.toastr.success("Reservation Done Succefully")
      }, err => {


        this.toastr.error("falied resrevation")

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
      }, error => {
        this.toastr.error('error');
      });
  }
  reportData: any = []
  MonthlyAnnualReports(month: any, year: any) {
    let params = new HttpParams();
    if (month) {
      params = params.set('month', month.toString());
    }
    params = params.set('year', year.toString());
    console.log(month)
    console.log(year)
    this.httpClient.get('https://localhost:7019/api/Reservation/MonthlyAnnualReports', { params }).subscribe((resp) => {
      this.reportData = resp
      console.log(this.reportData)

    })
  }
  storeReservationData(data: any) {
    this.reservationData = data;
  }

  getReservationData() {
    return this.reservationData;
  }

}
