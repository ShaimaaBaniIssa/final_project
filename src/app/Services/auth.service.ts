import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private localStorageService: LocalStorageService
  ) { }

  login(body: any) {

    debugger;
    this.httpClient.post('https://localhost:7019/api/Login/login', body, { responseType: 'text' })
      .subscribe((resp: any) => {
        this.router.navigate(['']);
      }, err => {
        this.toastr.error("invalid username or password");
      })

  }
  register(body: any) {


    this.httpClient.post('https://localhost:7019/api/Login/Registration', body)
      .subscribe((resp) => {
        if (body.rememberMe) {

          // if the login is successfull
          // save username and password
          this.localStorageService.saveCredentials(body.username, body.password);
        }
        this.router.navigate(['auth/login']);
      }, err => {
        // toastr
        this.toastr.error("Invalid register");
      })


  }
}
