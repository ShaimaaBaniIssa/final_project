import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient,
    private toastr: ToastrService,) { }

  createReservation(body: any) {
    this.httpClient.post('https://localhost:7019/api/Reservation/CreateReservation', body).subscribe((result) => {
      console.log("done")
    }, err => {
      console.log(err.message)

    })
  }
}
