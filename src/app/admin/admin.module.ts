import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TripSearchComponent } from './trip-search/trip-search.component';
import { ReportComponent } from './report/report.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { SharedModule } from '../shared/shared.module';
import { ManagestationsComponent } from './Stations/managestations/managestations.component';
import { CreatestationComponent } from './Stations/createstation/createstation.component';
import { UpdatestationComponent } from './Stations/updatestation/updatestation.component';
import { ManagetripComponent } from './tripCRUD/managetrip/managetrip.component';
import { TripComponent } from './trip/trip.component';
import { CreatetripComponent } from './tripCRUD/createtrip/createtrip.component';
import { TripDetailsComponent } from './tripCRUD/trip-details/trip-details.component';
import { UpdatetripComponent } from './tripCRUD/updatetrip/updatetrip.component';
import { TripScheduleComponent } from './trip-schedule/trip-schedule.component';
import { CreateSchdualComponent } from './create-schdual/create-schdual.component';


@NgModule({
  declarations: [
    DashbordComponent,
    SidebarComponent,
    FormComponent,
    NavbarComponent,
    ProfileComponent,
    TripSearchComponent,
    ReportComponent,
    CreateTripComponent,
    ManagestationsComponent,
    CreatestationComponent,
    UpdatestationComponent,
ManagetripComponent,
TripComponent,
CreatetripComponent,
TripDetailsComponent,
UpdatetripComponent,
TripScheduleComponent,
CreateSchdualComponent   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
   
   
  ]
})
export class AdminModule { }
