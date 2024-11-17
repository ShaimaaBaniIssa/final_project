import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as saveAs from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  tripsearch: any = [];

  SearchTrip(startDate?: string, endDate?: string) {
    let url = 'https://localhost:7019/api/TripSchedule/SearchTrip';


    if (startDate && endDate) {
      url += `?startDate=${startDate}&endDate=${endDate}`;
    } else if (startDate) {
      url += `?startDate=${startDate}`;
    } else if (endDate) {
      url += `?endDate=${endDate}`;
    }

    this.httpClient.get(url)
      .subscribe(
        result => {
          this.tripsearch = result;
          console.log(result);
        },
        error => {
          console.log(error.message);
          this.toastr.error("Error occurred while fetching trips.");
        }
      );
  }

  GetMonthlyReservationCount() {
    return this.httpClient.get('https://localhost:7019/api/Reservation/GetMonthlyReservationCount');

  }

  MonthlyAnnualReports(month: any, year: any): Observable<any> {
    let params = new HttpParams();
    if (month) {
      params = params.set('month', month.toString());
    }
    params = params.set('year', year.toString());

    return this.httpClient.get<any>('https://localhost:7019/api/Reservation/MonthlyAnnualReports', { params })

  }

  getInvoices(reservationId: number) {
    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);

    return this.httpClient.get('https://localhost:7019/api/Reservation/GetInvoices/' + reservationId, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        // Create a download link for the user
        saveAs(response, 'Invoices.zip');
      }, (error: HttpErrorResponse) => {

        this.toastr.error(error.error)
      });
  }
}
