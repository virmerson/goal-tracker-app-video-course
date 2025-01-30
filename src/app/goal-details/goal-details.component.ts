import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal-details',
  imports: [],
  templateUrl: './goal-details.component.html',
  styleUrl: './goal-details.component.css'
})
export class GoalDetailsComponent {

  goal:Goal | undefined
  constructor(private route:ActivatedRoute, private goalService:GoalService){
      const goalId = this.route.snapshot.paramMap.get('id') ?? '';
      this.goalService.getGoalById(goalId).then( (goal:Goal)=> this.goal =  goal) ;
  }
}
