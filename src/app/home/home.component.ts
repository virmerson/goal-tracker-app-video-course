import { Component } from '@angular/core';
import { GoalComponent } from "../goal/goal.component";
import { Goal } from '../goal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [GoalComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    goalList:Goal[] = [
      {
        id:'1ab',
        description:'Finish this angular course',
        hours: 10
      },
      {
        id:'2bc',
        description:'Learn Type Script',
        hours: 12
      }
    ]
}
