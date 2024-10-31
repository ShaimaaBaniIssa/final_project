import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { TripSearchComponent } from './trip-search/trip-search.component';
import { TripComponent } from './trip/trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ManagetripComponent } from './tripCRUD/managetrip/managetrip.component';
import { CreatetripComponent } from './tripCRUD/createtrip/createtrip.component';
import { TripDetailsComponent } from './tripCRUD/trip-details/trip-details.component';
import { UpdatetripComponent } from './tripCRUD/updatetrip/updatetrip.component';
import { TripScheduleComponent } from './trip-schedule/trip-schedule.component';
import { CreateSchdualComponent } from './create-schdual/create-schdual.component';
import { CreateTrainComponent } from './trainCRUD/create-train/create-train.component';
import { UpdatetrainComponent } from './trainCRUD/updatetrain/updatetrain.component';

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
  }
  
  ,
  {
    path:'trip',
    component:TripComponent
  },
  {
    path:'tripdetails',
    component:TripDetailsComponent
  },
  {
    path:'createtrip',
    component:CreatetripComponent
  },
  
  {
    path:'updatetrip',
    component:UpdatetripComponent
  },
  {
    path:'tripsearch',
    component:TripSearchComponent
  },
  {
    path:'tripschedule',
    component:TripScheduleComponent
  },
  {
    path:'CreateSchdual',
    component:CreateSchdualComponent
  },
  {
    path:'createtrain',
    component:CreateTrainComponent
  },
  {
    path:'updatetrain',
    component:UpdatetrainComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
