import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }
  Aboutuspage: any = []
  message: string = '';
  isSuccess: boolean = false;
  GetAllAboutPages() {
    this.http.get('https://localhost:7019/api/Aboutuspage').subscribe(result => {
      this.Aboutuspage = result
    }, err => {
      console.log(err.message);
    }
    )
  }
}
