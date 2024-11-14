import { Routes } from '@angular/router';

import { DeleteProjectComponent } from './delete-project/delete-project.component';

export const routes: Routes = [
  {
    path: 'delete-project/:id',
    component: DeleteProjectComponent
  },
  {
    path: '',
    redirectTo: 'delete-project',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'delete-project'
  }
];
