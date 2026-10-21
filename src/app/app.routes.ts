import { Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

/**
 * MAIN-BRANCH ONLY: every URL serves the under-construction page until
 * the client approves the staging website.
 */
export const routes: Routes = [
  { path: '', component: UnderConstructionComponent },
  { path: '**', component: UnderConstructionComponent },
];
