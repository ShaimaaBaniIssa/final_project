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
  logout(){
    localStorage.clear();
    console.log('Local storage cleared'); 

  }
}
