import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal"
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from "../quote-class/quote"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [];
  // alertService:AlertService;
  quote: Quote;

  constructor(private goalService:GoalService, private alertService:AlertService, private http:HttpClient) {
    // this.getGoals();
    this.alertService = alertService;
  }

  ngOnInit(): void {
    this.getGoals();

    this.http.get<Quote>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      this.quote = new Quote(data.author, data.quote);
    }, err=>{

    })
  }
  getGoals(){
    this.goals = this.goalService.getGoals();
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);
      if (toDelete) {
        this.goals.splice(index, 1);
        alert("The message has been deleted.")
      }
    }
  }
  addNewGoal(newGoal) {
    newGoal.id = this.goals.length + 1;
    console.log(newGoal.completeDate);
    this.goals.push(newGoal);
  }

}
