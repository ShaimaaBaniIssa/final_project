import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { ManagestationService } from '../../services/managestation.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-deletestation',
  templateUrl: './deletestation.component.html',
  styleUrls: ['./deletestation.component.css']
})
export class DeletestationComponent {
  constructor(public manageStationsService: ManagestationService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  deleteStation() {
    console.log("deeee");
    this.manageStationsService.deleteStation(this.data);
  }
  // openDelete(id:any){
  //   const dialogref = this.dialog.open(this.deleteDialog).afterClosed().subscribe((result)=>{
  //     if (result!=undefined)
  //     {
  //       if(result='yes')
  //         this.managestationservice.deleteCourse(id);
  //     }else if (result = 'no')
  //       console.log("not deleted")
  //   })
  //     }

}
