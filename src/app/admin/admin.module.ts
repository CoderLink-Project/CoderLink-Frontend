import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RevisarPortafolioFreelancerComponent } from '../revisar-portafolio-freelancer/revisar-portafolio-freelancer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RevisarPortafolioFreelancerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
