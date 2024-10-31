import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageSeatsService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient,private rout:Router) { }
  createSeat(body:any){
    console.log(body)
this.httpClient.post('https://localhost:7019/api/Seat/CreateSeat',body).subscribe((res)=>{
  this.toastr.success("Seat Created successfully.");
  this.rout.navigate(['/admin/trip'])

},err=>{
  console.log(err)
 
})
  }

  updateSeat(body:any){
    console.log(body)
    this.httpClient.put('https://localhost:7019/api/Seat/UpdateSeat',body).subscribe((res)=>{
      this.toastr.success("Seat updated successfully.");
      this.rout.navigate(['/admin/trip'])
    
    },err=>{
      console.log(err)
     
    })
  }
  DeleteSeat(id: number) {
    this.httpClient.delete("https://localhost:7019/api/Train/DeleteSeat/" + id).subscribe(resp => {
      this.toastr.success("The Seat Deleted")
    }, err => {
      this.toastr.error("can't Seat this station")

    })
}
}
