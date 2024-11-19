import { Component, OnInit } from '@angular/core';
import { AboutService } from '../Services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(public About :AboutService){}
  ngOnInit(): void {
    this.About.GetAllAboutPages();
  }
  
  
 

}

 

