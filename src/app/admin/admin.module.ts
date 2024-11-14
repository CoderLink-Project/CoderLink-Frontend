import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditProfileCustomerComponent } from '../edit-profile-customer/edit-profile-customer.component';


@NgModule({
  declarations: [
    EditProfileCustomerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgModule
  ]
})
export class AdminModule { }
