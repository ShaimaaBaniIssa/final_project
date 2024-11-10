import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit {
  monthnumber: any = [];
  number: any = [];
  chartLabels: string[] = [];
  reservations: any = [];

  mAReport = new FormGroup({
    month: new FormControl(),
    year: new FormControl('', Validators.required)
  })
  constructor(public reportService: ReportService) { }
  ngOnInit() {

    // Set the current year as the default value for the year control
    const currentYear = new Date().getFullYear();
    this.mAReport.patchValue({ year: currentYear.toString() });
    const { month, year } = this.mAReport.value;
    this.reportService.MonthlyAnnualReports(month, year).subscribe(result => {
      this.reservations = result;
      console.log(result)
    });

    this.reportService.GetMonthlyReservationCount().subscribe(result => {
      this.monthnumber = result;

      // Extract months and counts into separate arrays
      this.chartLabels = this.monthnumber.map((item: any) => item.reservationMonth);
      this.number = this.monthnumber.map((item: any) => item.reservationCount);

      // Update chart data after arrays are populated
      this.updateChartData();
    });

  }

  onSubmit() {

    this.reportService.MonthlyAnnualReports(this.mAReport.value.month, this.mAReport.value.year).subscribe(result => {
      this.reservations = result;
      this.chartLabels.length = 0;
      this.number.length = 0;
      this.chartLabels.push(this.mAReport.value.month.toString());
      this.number.push(result.length);
      this.updateChartData();

    });

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

