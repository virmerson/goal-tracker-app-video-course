import { Component, Input } from '@angular/core';
import { Goal } from '../goal';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-goal',
  imports: [RouterModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
    @Input() goal!:Goal;
}
