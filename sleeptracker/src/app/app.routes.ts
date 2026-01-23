import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'overnight-sleep-data',
    loadComponent: () => import('./overnight-sleep-data/overnight-sleep-data.page').then( m => m.OvernightSleepDataPage)
  },
  {
    path: 'stanford-sleepiness-data',
    loadComponent: () => import('./stanford-sleepiness-data/stanford-sleepiness-data.page').then( m => m.StanfordSleepinessDataPage)
  },
  {
    path: 'view-overnight-sleep-data',
    loadComponent: () => import('./view-overnight-sleep-data/view-overnight-sleep-data.page').then( m => m.ViewOvernightSleepDataPage)
  },
  {
    path: 'view-stanford-sleepiness-data',
    loadComponent: () => import('./view-stanford-sleepiness-data/view-stanford-sleepiness-data.page').then( m => m.ViewStanfordSleepinessDataPage)
  },

];
