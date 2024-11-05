import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  constructor(private profileService: ProfileService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  tickets: any = [];
  ngOnInit(): void {

    this.profileService.getUserTickets(this.data).subscribe(result => {
      this.tickets = result;
      console.log(result);
    }, err => {
      console.log(err.message);
    }
    )
  }

}
