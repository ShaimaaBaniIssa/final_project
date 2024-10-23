import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class SharedModule { }
