import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeServiceService } from '../../services/home-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UpdatehomepageComponent } from '../updatehomepage/updatehomepage.component';

@Component({
  selector: 'app-managepages',
  templateUrl: './managepages.component.html',
  styleUrls: ['./managepages.component.css']
})
export class ManagepagesComponent implements OnInit {

  homedata: any = {};
  constructor(public homeservice: HomeServiceService, public dialog: MatDialog, private router: Router) {

  }
  ngOnInit(): void {
    this.homeservice.getAllHomepages().subscribe(
      (result: any) => {
        // If `result` is not an array, wrap it in an array.
        // const data = Array.isArray(result) ? result : [result];
        console.log(result);
        this.homedata = result;

        console.log(this.homedata);
      },
      error => {
        console.error(error);
        // this.toastr.error("Failed to load train data.");
      }
    );
  }




  update() {

    const dialogRef = this.dialog.open(UpdatehomepageComponent, {
      data: this.homedata
    });
  }




}
