import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  userData: any = []
  users: any = []
  getUser() {

    this.http.get('https://localhost:7019/api/Customer/GetCustomerById').subscribe((result) => {
      this.userData = result
      console.log(result);
    }, error => {
      console.log(error.message);
      this.toastr.error("error");
    })
  }

  updateUser(body: any) {
    console.log(body);
    this.http.put('https://localhost:7019/api/Customer/UpdateCustomer', body).subscribe((result) => {
      console.log(result);
      this.toastr.success("User updated successfully.");

    }, error => {
      console.log(error.message);
      this.toastr.error("error");
    })
  }
  getCustomers() {
    this.http.get('https://localhost:7019/api/Customer').subscribe(result => {
      this.users = result
      console.log('get Customer page susseccfuly');
    }, err => {
      console.log(err.message);
    }
    )
  }
  getUserReservations(): Observable<any> {
    return this.http.get('https://localhost:7019/api/Reservation/GetReservationByCustId');
  }
  getUserTickets(reservationId: any): Observable<any> {
    return this.http.get('https://localhost:7019/api/Reservation/GetReservationTickets/' + reservationId);
  }
  private userLocation: { lat: number; lng: number } | null = null;

  setUserLocation(location: { lat: number; lng: number }) {
    this.userLocation = location;


  }

  getUserLocation(): { lat: number; lng: number } | null {
    return this.userLocation;
  }
}
