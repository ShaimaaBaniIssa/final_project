import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit{
  constructor(public report:ReservationService){}
  ngOnInit() {
    // Set the current year as the default value for the year control
    const currentYear = new Date().getFullYear();
    this.mAReport.patchValue({ year: currentYear.toString() }); // Set the year

    // Automatically call onSubmit to fetch data for the current year
    this.onSubmit(); // Call to fetch data
  }

mAReport=new FormGroup({
  month:new FormControl(),
  year:new FormControl('',Validators.required)
})
onSubmit(){
this.report.MonthlyAnnualReports(this.mAReport.value.month,this.mAReport.value.year)
}
 // Function to print the report as PDF
 printReport() {
  const reportContent = document.getElementById('reportTable');
  if (reportContent) {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Report PDF</title>');
      printWindow.document.write('</head><body >');
      printWindow.document.write(reportContent.outerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  }
}
}

