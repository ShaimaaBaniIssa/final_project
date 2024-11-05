import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { TicketsComponent } from '../tickets/tickets.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {
  constructor(private profileService: ProfileService, public dialog: MatDialog) { }
  reservations: any = [];
  ngOnInit(): void {
    this.profileService.getUserReservations().subscribe(result => {
      this.reservations = result
      console.log(result);
    }, err => {
      console.log(err.message);
    }
    )
  }
  showTickets(reservationId: any) {
    const dialogRef = this.dialog.open(TicketsComponent, {
      data: reservationId
    });

  }

}
