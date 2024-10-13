import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  savedEmails: string[] = [];

  constructor(private authService: AuthService,
    private fb: FormBuilder
    , private localStorageService: LocalStorageService,
    private router: Router) { }
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });

    //load saved emails from local storage
    const storedCredentials = this.localStorageService.getUsersSavedData();

    //if its not null
    if (storedCredentials) {

      // show the saved emails in email input
      this.savedEmails = storedCredentials.map((cred: any) => cred.email);
    }
  }
  onEmailSelected(event: any): void {
    const selectedEmail = event.target.value;

    //find the saved password for the selected email
    const storedCredentials = this.localStorageService.getUsersSavedData();
    console.log(storedCredentials);
    const matchingCredentials = storedCredentials.find((cred: any) => cred.email === selectedEmail);

    // if the email is already saved
    if (matchingCredentials) {
      // edit the password field with the saved password
      this.loginForm.patchValue({
        password: matchingCredentials.password
      });
    }
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;

      this.authService.login(email, password);

      // if the login is successfull
      // save email and password
      if (rememberMe) {
        this.localStorageService.saveCredentials(email, password);
      }

      // move to home page
      this.router.navigate(['/']);
    }
  }

}
