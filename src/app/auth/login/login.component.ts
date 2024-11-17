import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  savedUsers: string[] = [];

  constructor(private authService: AuthService
    ,
    private router: Router) { }
  ngOnInit(): void {

  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false)
  })


  onSubmit(): void {
    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value);


    }
  }
  goToRegister() {

    this.router.navigate(['auth/register']);

  }

}
