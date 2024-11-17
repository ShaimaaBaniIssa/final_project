import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from '../services/report.service';
import { ManageTripService } from '../services/manage-trip.service';
import { ManageSchdualService } from '../services/manage-schdual.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trip-schedule',
  templateUrl: './trip-schedule.component.html',
  styleUrls: ['./trip-schedule.component.css']
})
export class TripScheduleComponent implements OnInit {
  tripSchedules: any[] = [];
  @ViewChild('callUpdateDialog') updateDailog !: TemplateRef<any>;
  constructor(public tripSc: ManageSchdualService, private fb: FormBuilder,
    private rout: Router, private trip: ManageTripService, public dialog: MatDialog,
    public manageSchdualService: ManageSchdualService) { }
  tripId: any
  ngOnInit(): void {
    this.tripId = this.trip.selectedTrip.tripid
    if (this.tripId) {
      localStorage.setItem('tripId', this.tripId);
    } else {

      this.tripId = localStorage.getItem('tripId');
    }
    this.tripSc.getTripScheduleById(this.tripId)
    this.manageSchdualService.getAllTrains()
    console.log(this.tripId)
  }



  updateSchedule: FormGroup = new FormGroup({
    tripscheduleid: new FormControl(),
    departureTime: new FormControl(),
    arrivalTime: new FormControl(),
    tripId: new FormControl(),
    trainid: new FormControl(),
    tdate: new FormControl()
  });

  pData: any = {}
  openUpdateDailog(obj: any) {
    this.pData = obj
    console.log(this.pData);
    this.pData.tDate = new Date(obj.tDate).toISOString().split('T')[0];
    this.updateSchedule.controls['tripscheduleid'].setValue(this.pData.tripScheduleId)
    this.updateSchedule.controls['tripId'].setValue(this.pData.tripId)
    this.dialog.open(this.updateDailog, {
      width: '600px'
    })
  }
  updateTripSchedule() {
    this.manageSchdualService.updateTripSchedule(this.pData)

  }


  deleteTripSchedule(tripScheduleId: number) {
    this.tripSc.deleteTripSchedule(tripScheduleId)
    console.log("Deleting trip schedule with ID:", tripScheduleId);

  }
  createSchedule() {

    this.rout.navigate(['/admin/CreateSchdual'])
  }


  selectDate() {

    this.trip.checkTripScheduleAvailability(this.pData.tripId,
      this.updateSchedule.controls['tdate'].value
    );
    this.updateSchedule.get('hour')?.enable();

  }
  endTripSchedule(tripScheduleId: number) {
    this.tripSc.endTripSchedule(tripScheduleId);
  }
}
