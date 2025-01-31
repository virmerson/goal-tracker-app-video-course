import { Component } from '@angular/core';
import { GoalService } from '../goal.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-new-goal',
  imports: [ReactiveFormsModule],
  templateUrl: './new-goal.component.html',
  styleUrl: './new-goal.component.css'
})
export class NewGoalComponent {
    notification:string | null = null;
    constructor(private goalService:GoalService){

    }

    addGoalForm =  new FormGroup(
      {
        description: new FormControl(''),
        hours: new FormControl(0)
      }
    )

    submitGoal(){
      const newGoal = {
        description:  this.addGoalForm.value.description ?? '',
        hours: this.addGoalForm.value.hours ?? 0
      };

      this.goalService.addNewGoal(newGoal).then( () => {
        this.notification = 'Successfully added!';
        this.addGoalForm.reset();
         setTimeout(()=>{
          this.notification = null;
         }, 3000)
      })

    }

}
