import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Goal } from '../goal';
import { RouterModule } from '@angular/router';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal',
  imports: [RouterModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
    @Input() goal!:Goal;
    @Output() goalDeleted =  new EventEmitter<string>()
    constructor(private goalService:GoalService){

    }

    deleteGoal(){
      if (this.goal.id)
       this.goalService.delete(this.goal.id).then(()=>{
          this.goalDeleted.emit(this.goal.id);
       });
      else
        console.error('Undefined id');
    }
}
