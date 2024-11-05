import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { StationComponent } from './station/station.component';
import { AllStationComponent } from './all-station/all-station.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminModule } from './admin/admin.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { UserReservationsComponent } from './UserReservations/user-reservations/user-reservations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'allstation', component: AllStationComponent },

  { path: 'station', component: StationComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'reservationDetails', component: ReservationDetailsComponent },


  { path: 'about', component: AboutComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'userReservation', component: UserReservationsComponent },


  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'admin', loadChildren: () => AdminModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // Scrolls to top on navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
