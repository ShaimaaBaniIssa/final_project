import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ManagestationService } from '../../services/managestation.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-deletestation',
  templateUrl: './deletestation.component.html',
  styleUrls: ['./deletestation.component.css']
})
export class DeletestationComponent {
  @ViewChild('callDeleteDailog') deleteDialog !:TemplateRef<any>;
  constructor(public managestationservice:ManagestationService,public dialog:MatDialog){}
  
  openDelete(id:any){
    const dialogref = this.dialog.open(this.deleteDialog).afterClosed().subscribe((result)=>{
      if (result!=undefined)
      {
        if(result='yes')
          this.managestationservice.deleteCourse(id);
      }else if (result = 'no')
        console.log("not deleted")
    })
      }

}
