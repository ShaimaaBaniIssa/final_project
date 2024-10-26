import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('user') ?? '{}');
  userName: string = this.userData.name ;

  ngOnInit() {
    console.log(this.userName);
  }
}
