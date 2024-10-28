import { Component } from '@angular/core';

@Component({
  selector: 'home-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userData = JSON.parse(localStorage.getItem('user') ?? '{}');
  userName: string = this.userData.name ;
  userProfileImage:string='../../assets/Images/user.png'
  logout(){
    localStorage.clear();
    console.log('Local storage cleared'); 

  }
}
