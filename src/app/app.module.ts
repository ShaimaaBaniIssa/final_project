import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { StationComponent } from './station/station.component';
import { AllStationComponent } from './all-station/all-station.component';
import { StationCardComponent } from './station-card/station-card.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { StationPipe } from './Pipes/station.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent,
    TestimonialComponent,
    StationComponent,
    AllStationComponent,
    StationCardComponent,
    ReservationComponent,
    PaymentComponent,
    UserProfileComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ToastNoAnimationModule.forRoot(),
    NoopAnimationsModule


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
