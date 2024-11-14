import { Routes } from '@angular/router';
import { RevisarPortafolioFreelancerComponent } from './revisar-portafolio-freelancer/revisar-portafolio-freelancer.component';

export const routes: Routes = [
    { path: 'revisar-portafolio-freelancer', component: RevisarPortafolioFreelancerComponent},
    {
        path: '',
        redirectTo: 'revisar-portafolio-freelancer',
        pathMatch: 'full'
    }
];
