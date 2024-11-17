import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReportService } from '../services/report.service';
import jsPDF from 'jspdf';

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
    if (this.mAReport.valid && this.mAReport.value.year !== null) {
      // Set month to null if you want the entire year
      const month = this.mAReport.value.month ? this.mAReport.value.month : null;

      this.reportService.MonthlyAnnualReports(month, this.mAReport.value.year).subscribe(result => {
        this.reservations = result;
        this.chartLabels.length = 0;
        this.number.length = 0;

        // Safely convert month to string or use a default label
        const monthLabel = month !== null ? month.toString() : 'Whole Year';
        this.chartLabels.push(monthLabel);
        this.number.push(result.length);

        this.updateChartData();
      });
    } else {
      console.error('Form is invalid or missing required values');
    }
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
  downloadPDF() {
    const doc = new jsPDF();

    // Title for the PDF
    doc.text('Reservation Management Report', 10, 10);

    // Extract table data
    const tableData = this.reservations.map((reservation: { fname: any; email: any; stationname: any; destaddress: any; totalprice: any; reservationdate: string | number | Date; rDate: string | number | Date; departuretime: any; arrivaltime: any; }) => [
      reservation.fname,
      reservation.email,
      reservation.stationname,
      reservation.destaddress,
      reservation.totalprice,
      new Date(reservation.reservationdate).toLocaleDateString(),
      new Date(reservation.rDate).toLocaleDateString(),
      reservation.departuretime,
      reservation.arrivaltime
    ]);

    const columns = [
      'User Name', 'User Email', 'Station Name', 'Destination Address',
      'Total Price (JOD)', 'Reservation Date', 'Trip Date',
      'Departure Time', 'Arrival Time'
    ];

    // Add table to the PDF
    (doc as any).autoTable({
      head: [columns],
      body: tableData,
      startY: 20,
      theme: 'striped'
    });

    // Add chart to the PDF
    const chartCanvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (chartCanvas) {
      const chartImage = chartCanvas.toDataURL('image/png', 1.0);
      doc.addPage();
      doc.text('Monthly Reservations Chart', 10, 10);
      doc.addImage(chartImage, 'PNG', 10, 20, 180, 100);
    }

    // Save PDF
    doc.save('reservation-report.pdf');
  }
  downloadInvoices(reservationId: number) {
    this.reportService.getInvoices(reservationId);
  }

}

