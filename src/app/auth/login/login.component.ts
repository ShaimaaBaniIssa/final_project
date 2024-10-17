import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  savedUsers: string[] = [];

  constructor(private authService: AuthService
    , private localStorageService: LocalStorageService,
    private router: Router) { }
  ngOnInit(): void {
    //load saved usernames from local storage
    const storedCredentials = this.localStorageService.getUsersSavedData();

    //if its not null
    if (storedCredentials) {

      // show the saved usernames in username input
      this.savedUsers = storedCredentials.map((cred: any) => cred.username);
    }
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false)
  })

  onUsernameSelected(event: any): void {
    const selectedUsername = event.target.value;

    //find the saved password for the selected username
    const storedCredentials = this.localStorageService.getUsersSavedData();
    const matchingCredentials = storedCredentials.find((cred: any) => cred.username == selectedUsername);

    // if the username is already saved
    if (matchingCredentials) {
      // edit the password field with the saved password
      this.loginForm.patchValue({
        password: matchingCredentials.password
      });
    }
  }
  onSubmit(): void {
    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value);


    }
  }

}
