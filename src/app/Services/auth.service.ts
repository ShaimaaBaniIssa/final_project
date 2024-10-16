import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router
  ) { }

  login(body: any) {

    this.httpClient.post('https://localhost:7019/api/Login/login', body)
      .subscribe((resp) => {
        console.log('login Sucessfully');
      }, err => {
        console.log('Something wont wrong');
      })
    return false;

  }
  register(body: any) {


    this.httpClient.post('https://localhost:7019/api/Login/Registration', body)
      .subscribe((resp) => {
        this.router.navigate(['auth/login']);
      }, err => {
        // toastr
        console.log('Something wont wrong');
      })


  }
}
