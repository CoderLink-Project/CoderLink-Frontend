import { Routes } from '@angular/router';
import { ConfirmPaidComponent } from './confirm-paid/confirm-paid.component';

export const routes: Routes = [
    { path: 'confirm-paid', component: ConfirmPaidComponent},
    {
        path: '',
        redirectTo: 'confirm-paid',
        pathMatch: 'full'
    }
];
