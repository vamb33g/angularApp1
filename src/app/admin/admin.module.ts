import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    DoctorsComponent,
    AdduserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
