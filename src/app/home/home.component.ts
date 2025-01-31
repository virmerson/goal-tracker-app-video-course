import { Component } from '@angular/core';
import { GoalComponent } from "../goal/goal.component";
import { Goal } from '../goal';
import { CommonModule } from '@angular/common';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-home',
  imports: [GoalComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  goalList: Goal[] = [];
  filteredGoalList:Goal[] = [];

  constructor(private goalService: GoalService) {
    this.goalService
    .getAllGoals()
    .then((goalList: Goal[]) => {
      this.goalList = goalList;
      this.filteredGoalList =  goalList;
    })
  }

  onGoalDeleted(goalId:string){
    this.goalList =  this.goalList
    .filter((goal)=> goal.id!=goalId)
  }

  filterResults(text:string){
    this.filteredGoalList =
    this.goalList
    .filter((goal)=>goal.description.toLowerCase().includes (text.toLowerCase()) )
  }
}
