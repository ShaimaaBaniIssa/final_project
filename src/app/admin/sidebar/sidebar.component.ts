import { Component,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  constructor(private rout:Router){

  }
  removevalue(){
    localStorage.removeItem('stationName');
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log('Local storage cleared'); 

  }
}
