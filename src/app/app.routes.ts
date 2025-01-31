import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { NewGoalComponent } from './new-goal/new-goal.component';

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
  },
  {
    path: 'new-goal',
    component: NewGoalComponent,
    title: 'New Goal'
  }

];
