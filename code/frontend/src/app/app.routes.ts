import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./static/pages/landing/landing.component')
      .then(c => c.LandingComponent)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authorization/authorization.routes')
      .then(r => r.authorizationRoutes)
  },


  {
    path: '**',
    loadComponent: () => import('./static/pages/error-page/error-page.component')
      .then(c => c.ErrorPageComponent),
    data: {
      errorTitle: 'Ничего не найдено',
      errorSubTitle: 'Попробуйте вернуться на главную страницу',
      errorLinks: [
        {
          title: 'Главная страница'
        }
      ]
    }
  }
];
