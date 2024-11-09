import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReservationService } from 'src/app/Services/reservation.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit{
  monthnumber: any = [];
number: any = [];
chartLabels: string[] = [];
  
  constructor(public report:ReservationService,public reportService:ReportService){}
  ngOnInit() {
    // Set the current year as the default value for the year control
    const currentYear = new Date().getFullYear();
    this.mAReport.patchValue({ year: currentYear.toString() }); // Set the year
  
    // Automatically call onSubmit to fetch data for the current year
    this.onSubmit(); // Call to fetch data
  
    this.reportService.GetMonthlyReservationCount().subscribe(result => {
      this.monthnumber = result;
  
      // Extract months and counts into separate arrays
      this.chartLabels = this.monthnumber.map((item: any) => item.reservationMonth);
      this.number = this.monthnumber.map((item: any) => item.reservationCount);
  
      // Update chart data after arrays are populated
      this.updateChartData();
    });
  }

mAReport=new FormGroup({
  month:new FormControl(),
  year:new FormControl('',Validators.required)
})
onSubmit(){
this.report.MonthlyAnnualReports(this.mAReport.value.month,this.mAReport.value.year)
}



updateChartData() {
  this.chartData = {
    labels: this.chartLabels,
    datasets: [
      {
        label: 'Number Of Users',
        data: this.number,
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#EF5350', '#AB47BC']
      }
    ]
  };
}

// Chart configuration
chartType: ChartType = 'bar';
chartData: ChartData<'bar'> = {
  labels: [],
  datasets: [
    {
      label: 'Sales',
      data: [],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#EF5350', '#AB47BC']
    }
  ]
};

chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};
}

