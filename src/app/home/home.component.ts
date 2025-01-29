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
    goalList:Goal[] = []

    constructor (private goalService:GoalService){
        this.goalList = goalService.getAllGoals();
    }
}
