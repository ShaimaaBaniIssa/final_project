import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageSeatsService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient, private rout: Router) { }
  createSeat(body: any) {
    this.httpClient.post('https://localhost:7019/api/Seat/CreateSeat', body).subscribe((res) => {
      this.toastr.success("Seat Created successfully.");
      window.location.reload();


    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }

  updateSeat(body: any) {
    this.httpClient.put('https://localhost:7019/api/Seat/UpdateSeat', body).subscribe((res) => {
      this.toastr.success("Seat updated successfully.");
      window.location.reload();

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }
  deleteSeat(id: number) {
    this.httpClient.delete("https://localhost:7019/api/Seat/DeleteSeat/" + id).subscribe(resp => {
      this.toastr.success("The Seat Deleted")
      window.location.reload();

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }
  getAllSeats(trainid: number) {
    return this.httpClient.get('https://localhost:7019/api/Seat/GetSeatByTrainId/' + trainid);
  }
}
