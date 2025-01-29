import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goal-details',
  imports: [],
  templateUrl: './goal-details.component.html',
  styleUrl: './goal-details.component.css'
})
export class GoalDetailsComponent {
  goalId = ''
  constructor(private route:ActivatedRoute){
      this.goalId = this.route.snapshot.paramMap.get('id') ?? '';
      console.log(this.goalId);
  }
}
