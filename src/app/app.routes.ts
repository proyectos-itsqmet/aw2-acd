import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Page404 } from './features/page-404/page-404';
import { Store } from './features/store/store';
import { About } from './features/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'store',
    component: Store,
  },
  {
    path: 'about',
    component: About,
  },
  { path: '**', component: Page404 },
];
