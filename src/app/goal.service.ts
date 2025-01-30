import { Injectable } from '@angular/core';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private url ='http://localhost:3000/goals'

  constructor() { }

  async getAllGoals():Promise<Goal[]>{
    const data = await fetch(this.url)
    return await data.json();
  }

  async getGoalById(id:string):Promise<Goal>{
    const data =  await fetch( `${this.url}/${id}`)
    return await data.json()
  }

  async addNewGoal(goal:Goal){
    await fetch(this.url, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goal)
    });
  }
}
