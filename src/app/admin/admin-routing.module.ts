import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
