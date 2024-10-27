import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { StationPipe } from '../Pipes/station.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    StationPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    MatDialogModule,
    
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    StationPipe,
    MatDialogModule,
   
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
