import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-trip-schedule',
  templateUrl: './trip-schedule.component.html',
  styleUrls: ['./trip-schedule.component.css']
})
export class TripScheduleComponent implements OnInit {
  tripSchedules: any[] = [];

  constructor(public reportService: ReportService, private fb: FormBuilder,private rout:Router ) { }

  ngOnInit(): void {
    
    this.reportService.getTripSchedule();
  }
  updateTripSchedule(tripSchedule: any) {
    console.log("Updating trip schedule:", tripSchedule);
   
  }

  
  deleteTripSchedule(tripScheduleId: number) {
    console.log("Deleting trip schedule with ID:", tripScheduleId);
   
}
createSchedule(){
  this.rout.navigate(['/admin/CreateSchdual'])
  }
}
