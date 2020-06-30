import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  // playerName;
  // user;

  addTaskForm = new FormGroup({
    taskName: new FormControl('',Validators.required),
    taskDesc: new FormControl('')
  })

  constructor() { }

  getTaskData(){
    console.log(this.addTaskForm.value)
  }

  ngOnInit(): void {
  }

}
