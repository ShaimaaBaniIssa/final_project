import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { TripSearchComponent } from './trip-search/trip-search.component';
import { TripComponent } from './trip/trip.component';
import { ManagetripComponent } from './tripCRUD/managetrip/managetrip.component';
import { CreatetripComponent } from './tripCRUD/createtrip/createtrip.component';
import { TripDetailsComponent } from './tripCRUD/trip-details/trip-details.component';
import { UpdatetripComponent } from './tripCRUD/updatetrip/updatetrip.component';
import { TripScheduleComponent } from './trip-schedule/trip-schedule.component';
import { CreateSchdualComponent } from './create-schdual/create-schdual.component';
import { CreateTrainComponent } from './trainCRUD/create-train/create-train.component';
import { UpdatetrainComponent } from './trainCRUD/updatetrain/updatetrain.component';
import { ManagetrainComponent } from './trainCRUD/managetrain/managetrain.component';
import { ManageseatsComponent } from './seatsCRUD/manageseats/manageseats.component';
import { ManagepagesComponent } from './pages/managepages/managepages.component';
import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';
import { UserComponent } from './user/user.component';
import { ApprovedTestimonialComponent } from './Testimonial/approved-testimonial/approved-testimonial.component';
import { UnapprovedTestimonialComponent } from './Testimonial/unapproved-testimonial/unapproved-testimonial.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AboutComponent } from '../about/about.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';

const routes: Routes = [
  {
    path: 'dashbord',
    component: DashbordComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
  ,
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }

  ,
  {
    path: 'trip',
    component: TripComponent
  },
  {
    path: 'tripdetails',
    component: TripDetailsComponent
  },
  {
    path: 'createtrip',
    component: CreatetripComponent
  },

  {
    path: 'updatetrip',
    component: UpdatetripComponent
  },
  {
    path: 'tripsearch',
    component: TripSearchComponent
  },
  {
    path: 'tripschedule',
    component: TripScheduleComponent
  },
  {
    path: 'CreateSchdual',
    component: CreateSchdualComponent
  },
  {
    path: 'createtrain',
    component: CreateTrainComponent
  },
  {
    path: 'updatetrain',
    component: UpdatetrainComponent
  },
  {
    path: 'managetrain',
    component: ManagetrainComponent
  }
  , {
    path: 'manageseats/:id',
    component: ManageseatsComponent
  },
  {
    path: 'managehomepage',
    component: ManagepagesComponent
  },
  {
    path: 'admincontact',
    component: ContactuspageComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
  ,
  {
    path: 'approveTest',
    component: ApprovedTestimonialComponent
  },
  {
    path: 'unapproveTest',
    component: UnapprovedTestimonialComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'aboutpage',
    component: AboutuspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
