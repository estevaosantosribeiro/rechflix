import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Detalhes } from './components/detalhes/detalhes';

export const routes: Routes = [
  { path: '', component: Home, title: 'Rechflix'},
  { path: 'detalhes/:id', component: Detalhes, title: 'Detalhes' },
];
