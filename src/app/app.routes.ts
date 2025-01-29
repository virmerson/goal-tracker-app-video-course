import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'details/:id',
    component: GoalDetailsComponent,
    title: 'Details Page'
  }];
