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
import { CreateTrainComponent } from './trainCRUD/create-train/create-train.component';
import { ManagetrainComponent } from './trainCRUD/managetrain/managetrain.component';
import { UpdatetrainComponent } from './trainCRUD/updatetrain/updatetrain.component';
import { CreateseatComponent } from './seatsCRUD/createseat/createseat.component';
import { UpdateseatComponent } from './seatsCRUD/updateseat/updateseat.component';
import { DeleteTrainComponent } from './trainCRUD/delete-train/delete-train.component';
import { ManageseatsComponent } from './seatsCRUD/manageseats/manageseats.component';
import { DeleteseatComponent } from './seatsCRUD/deleteseat/deleteseat.component';
import { ManagepagesComponent } from './pages/managepages/managepages.component';
import { UpdatehomepageComponent } from './pages/updatehomepage/updatehomepage.component';
import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { UnapprovedTestimonialComponent } from './Testimonial/unapproved-testimonial/unapproved-testimonial.component';
import { ApprovedTestimonialComponent } from './Testimonial/approved-testimonial/approved-testimonial.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';


@NgModule({
  declarations: [
    DashbordComponent,
    SidebarComponent,
    FormComponent,
    NavbarComponent,
    ProfileComponent,
    TripSearchComponent,
    ReportComponent,
    ManagestationsComponent,
    CreatestationComponent,
    UpdatestationComponent,
    ManagetripComponent,
    TripComponent,
    CreatetripComponent,
    TripDetailsComponent,
    UpdatetripComponent,
    TripScheduleComponent,
    CreateSchdualComponent,
    CreateTrainComponent,
    ManagetrainComponent,
    UpdatetrainComponent,
    CreateseatComponent,
    UpdateseatComponent,
    DeleteTrainComponent,
    ManageseatsComponent,
    DeleteseatComponent,
    ManagepagesComponent,
    UpdatehomepageComponent,
    ContactuspageComponent,
    UserComponent,
    FeedbackComponent,
    UnapprovedTestimonialComponent,
    ApprovedTestimonialComponent,
    AboutuspageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule


  ]
})
export class AdminModule { }
