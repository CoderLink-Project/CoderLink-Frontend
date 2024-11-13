import { Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';

export const routes: Routes = [
  {
    path: 'create-project',
    component: CreateProjectComponent
  },
  {
    path: '',
    redirectTo: 'create-project',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'create-project'
  }
];
