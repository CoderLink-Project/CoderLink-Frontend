import { Routes } from '@angular/router';
import { ProjectSectionComponent } from './project-section/project-section.component';

export const routes: Routes = [
    { path: 'project-section', component: ProjectSectionComponent },
    {
        path: '',
        redirectTo: 'project-section',
        pathMatch: 'full'
    }
import { ChangePasswordComponent } from './change-password/change-password.component';

export const routes: Routes = [
    {path: 'change-password', component: ChangePasswordComponent},

];
