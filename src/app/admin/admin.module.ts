import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProjectSectionComponent } from '../project-section/project-section.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@NgModule({
  declarations: [
    ProjectSectionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]

    ChangePasswordComponent,
  ],
  imports: [
    NgModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
export class AdminModule { }
