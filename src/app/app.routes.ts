import { Routes } from '@angular/router';
import { RevisarPortafolioFreelancerComponent } from './review-freelancer-portfolio/review-freelancer-portfolio.component';

export const routes: Routes = [
    { path: 'review-freelancer-portfolio', component: RevisarPortafolioFreelancerComponent},
    {
        path: '',
        redirectTo: 'review-freelancer-portfolio',
        pathMatch: 'full'
    }
];
