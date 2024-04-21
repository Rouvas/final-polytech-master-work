import { Routes } from '@angular/router';

export const authorizationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./screens/sign-in/sign-in.component')
      .then(c => c.SignInComponent)
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadComponent: () => import('./screens/sign-up/sign-up.component')
      .then(c => c.SignUpComponent)
  }
]
