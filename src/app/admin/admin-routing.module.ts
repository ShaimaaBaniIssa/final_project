import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { TripComponent } from './trip/trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';

const routes: Routes = [
  {
    path:'dashbord',
    component:DashbordComponent
  },
  {
    path:'form',
    component:FormComponent
  }
  ,
  {
    path:'profile',
    component:ProfileComponent
  } ,
  {
    path:'report',
    component:ReportComponent
  },
  {
    path:'trip',
    component:TripComponent
  }
  ,
  {
    path:'createtrip',
    component:CreateTripComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
