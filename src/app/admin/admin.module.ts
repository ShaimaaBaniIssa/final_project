import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashbordComponent,
    SidebarComponent,
    FormComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
   
   
  ]
})
export class AdminModule { }
