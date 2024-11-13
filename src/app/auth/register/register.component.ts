import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phonenumber: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)

  });
  cities = ['Irbid', 'Amman', 'Zarqa', 'Aqaba'];

  constructor(private authService: AuthService,
    private router: Router
  ) { }
  onSubmit() {
    this.authService.register(this.registerForm.value);


  }
  goToLogin() {

    this.router.navigate(['auth/login']);

  }
}
