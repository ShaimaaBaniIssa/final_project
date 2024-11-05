import { Component } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'home-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public home:HomeService){}
  userData = JSON.parse(localStorage.getItem('user') ?? '{}');
  userName: string = this.userData.name ;
  userProfileImage:string='../../assets/Images/user.png'
  logout(){
    localStorage.clear();
    console.log('Local storage cleared'); 

  }
}
