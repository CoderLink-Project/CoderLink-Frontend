import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { RevisarPortafolioFreelancerComponent } from '../review-freelancer-portfolio/review-freelancer-portfolio.component';


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
