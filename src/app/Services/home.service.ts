import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient) { }
  homepage : any =[];
  GetAllHomePages() {
      this.httpClient.get("https://localhost:7019/api/HomePage")
        .subscribe(
          result => {
            this.homepage = result;
            const logoimage=localStorage.setItem("logoimage",this.homepage.logoimage);
          },
          error => {
            this.toastr.error("error");
          }
        );
    }
}
