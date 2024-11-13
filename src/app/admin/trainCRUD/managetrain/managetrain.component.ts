import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ManageTrainService } from '../../services/manage-train.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatetrainComponent } from '../updatetrain/updatetrain.component';
import { DeleteTrainComponent } from '../delete-train/delete-train.component';
import { CreateTrainComponent } from '../create-train/create-train.component';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-managetrain',
  templateUrl: './managetrain.component.html',
  styleUrls: ['./managetrain.component.css']
})
export class ManagetrainComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'numofseats', 'update'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public trainService: ManageTrainService, public dialog: MatDialog, private router: Router) {

  }
  ngOnInit(): void {
    this.trainService.getAllTrains().subscribe(
      (result: any) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(result);
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
    const dialogRef = this.dialog.open(UpdatetrainComponent, {
      data: train
    });
  }
  remove(id: number) {

    const dialogRef = this.dialog.open(DeleteTrainComponent, {
      data: id
    });
  }
  create() {
    const dialogRef = this.dialog.open(CreateTrainComponent);
  }
  seats(id: number) {
    this.router.navigate(['/admin/manageseats', id]);
  }

}



