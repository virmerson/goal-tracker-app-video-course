import { Injectable } from '@angular/core';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goalList:Goal[] = [
      {
        id:'1ab',
        description:'Finish this angular course 2',
        hours: 10
      },
      {
        id:'2bc',
        description:'Learn Type Script 2',
        hours: 12
      }
    ]

  constructor() { }

  getAllGoals(){
    return this.goalList;
  }

  getGoalById(id:string){
    return this.goalList.find( (goal)=> goal.id === id)
  }
}
