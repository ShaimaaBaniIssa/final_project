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
import { authGuard } from './Guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { reservationGuard } from './Guards/reservation.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'allstation', component: AllStationComponent },
  { path: 'about', component: AboutComponent },

  { path: 'station/:id', component: StationComponent },
  { path: 'reservation/:id', component: ReservationComponent, canActivate: [reservationGuard] },
  { path: 'reservationDetails', component: ReservationDetailsComponent, canActivate: [reservationGuard] },


  { path: 'userprofile', component: UserProfileComponent, canActivate: [reservationGuard] },
  { path: 'userReservation', component: UserReservationsComponent, canActivate: [reservationGuard] },


  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // Scrolls to top on navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
