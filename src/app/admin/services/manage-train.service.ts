import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageTrainService {

  selectedTrain: any = {};

  constructor(private toastr: ToastrService, private httpClient: HttpClient,private rout:Router) { }

  createTrain(body:any){
    console.log(body)
this.httpClient.post('https://localhost:7019/api/Train/CreateTrain',body).subscribe((res)=>{
  this.toastr.success("Train Created successfully.");
  this.rout.navigate(['/admin/trip'])

},err=>{
  console.log(err)
 
})
  }
  updateTrain(body:any){
    console.log(body)
    this.httpClient.put('https://localhost:7019/api/Train/UpdateTrain',body).subscribe((res)=>{
      this.toastr.success("Train updated successfully.");
      this.rout.navigate(['/admin/trip'])
    
    },err=>{
      console.log(err)
     
    })
  }
  DeleteTrain(id: number) {
    this.httpClient.delete("https://localhost:7019/api/Train/DeleteTrain/" + id).subscribe(resp => {
      this.toastr.success("The Train Deleted")
    }, err => {
      this.toastr.error("can't Train this station")

    })
}

}