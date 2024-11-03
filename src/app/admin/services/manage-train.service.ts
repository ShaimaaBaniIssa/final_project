import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageTrainService {

  trains: any = [];

  constructor(private toastr: ToastrService, private httpClient: HttpClient, private rout: Router) { }

  createTrain(body: any) {
    console.log(body)
    this.httpClient.post('https://localhost:7019/api/Train/CreateTrain', body).subscribe((res) => {
      this.toastr.success("Train Created successfully.");
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
  updateTrain(body: any) {
    console.log(body)
    this.httpClient.put('https://localhost:7019/api/Train/UpdateTrain', body).subscribe((res) => {
      this.toastr.success("Train updated successfully.");
      window.location.reload();

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }
  DeleteTrain(id: number) {
    this.httpClient.delete("https://localhost:7019/api/Train/DeleteTrain/" + id).subscribe(resp => {
      this.toastr.success("The Train Deleted");
      window.location.reload();

    }, (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.toastr.error("Not Authorize");

      }
      else
        this.toastr.error(error.error)
    })
  }
  getAllTrains() {
    return this.httpClient.get('https://localhost:7019/api/Train');
  }
}