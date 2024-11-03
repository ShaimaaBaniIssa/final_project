import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ManageSeatsService } from '../../services/manage-seats.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UpdateseatComponent } from '../updateseat/updateseat.component';
import { CreateseatComponent } from '../createseat/createseat.component';
import { DeleteseatComponent } from '../deleteseat/deleteseat.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manageseats',
  templateUrl: './manageseats.component.html',
  styleUrls: ['./manageseats.component.css']
})
export class ManageseatsComponent implements OnInit {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private seatService: ManageSeatsService) { }
  trainid!: number;

  ngOnInit(): void {
    this.trainid = +this.route.snapshot.paramMap.get('id')!; // Convert to number if needed
    console.log(this.trainid); // Use the ID as needed

    this.seatService.getAllSeats(this.trainid).subscribe(
      (result: any) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(result);
      }, (error: HttpErrorResponse) => {
        if (error.status === 403) {
          console.log("Not Authorize");

        }
        else
          console.log("error");
      }
    );
  }
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'seatnumber', 'update'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  update(seat: any) {
    const dialogRef = this.dialog.open(UpdateseatComponent, {
      data: seat
    });
  }
  remove(id: number) {

    const dialogRef = this.dialog.open(DeleteseatComponent, {
      data: id
    });
  }
  create() {
    const dialogRef = this.dialog.open(CreateseatComponent, {
      data: this.trainid
    });
  }
}
