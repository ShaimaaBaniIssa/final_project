import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribeOn } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient,private toastr: ToastrService) { }
  userData:any=[]
  getUser(userId:any){

    this.http.get('https://localhost:7019/api/Customer/GetCustomerById/'+userId).subscribe((result)=>{
      this.userData=result
      console.log(result);
    }, error => {
      console.log(error.message);
      this.toastr.error("error");
    })
  }

  updateUser(body:any){
    console.log(body);
    this.http.put('https://localhost:7019/api/Customer/UpdateCustomer',body).subscribe((result)=>{
      console.log(result);
      this.toastr.success("User updated successfully.");
      
    }, error => {
      console.log(error.message);
      this.toastr.error("error");
    })
  }
}
