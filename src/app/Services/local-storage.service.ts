import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getUsersSavedData() {
    return JSON.parse(localStorage.getItem('savedCredentials') || '[]')
  }

  saveCredentials(username: string, password: string): void {
    // Retrieve current saved credentials
    const savedCredentials = this.getUsersSavedData();
    //check if the email is already stored
    const existingIndex = savedCredentials.findIndex((cred: any) => cred.username === username);

    if (existingIndex >= 0) {
      // maybe the password is changed
      savedCredentials[existingIndex].password = password;
    } else {
      savedCredentials.push({ username, password });
    }

    // Save updated credentials to local storage
    localStorage.setItem('savedCredentials', JSON.stringify(savedCredentials));
  }
}
