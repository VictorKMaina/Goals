import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  
  newGoal = new Goal(0, "", "", new Date());
  @Output() submittedGoal = new EventEmitter<Goal>();

  constructor() { }
  

  onSubmit(){
    let addGoal = Object.assign({}, this.newGoal)
    this.submittedGoal.emit(addGoal);
  }

  ngOnInit(): void {
  }

}
