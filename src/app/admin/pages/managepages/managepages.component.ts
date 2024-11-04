import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeServiceService } from '../../services/home-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UpdatehomepageComponent } from '../updatehomepage/updatehomepage.component';
import { CreatehomepageComponent } from '../createhomepage/createhomepage.component';

@Component({
  selector: 'app-managepages',
  templateUrl: './managepages.component.html',
  styleUrls: ['./managepages.component.css']
})
export class ManagepagesComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['homepageid', 'logoimage', 'websitetitle', 'toptext','formimage','titileabouttext','abouttext1','abouttext2','trainlogo','pointabouttext1','pointabouttext2','desttitle','desttext','update'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public homeservice: HomeServiceService, public dialog: MatDialog, private router: Router) {

}
ngOnInit(): void {
  this.homeservice.getAllHomepages().subscribe(
    (result: any) => {
      // If `result` is not an array, wrap it in an array.
      const data = Array.isArray(result) ? result : [result];
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    },
    error => {
      console.error(error);
      // this.toastr.error("Failed to load train data.");
    }
  );
}



applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
update(train: any) {
  console.log(train);
  const dialogRef = this.dialog.open(UpdatehomepageComponent, {
    data: train
  });
}
create() {
  const dialogRef = this.dialog.open(CreatehomepageComponent);
}



}
