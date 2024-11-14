import { Routes } from '@angular/router';
import { EditProfileCustomerComponent } from './edit-profile-customer/edit-profile-customer.component';

export const routes: Routes = [
    {path: 'edit-profile-customer', component: EditProfileCustomerComponent},
    {
        path: '',
        redirectTo: 'edit-profile-customer',
        pathMatch: 'full'
    }
];
