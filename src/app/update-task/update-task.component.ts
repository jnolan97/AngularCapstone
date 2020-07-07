import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  taskName;
  taskID
  public id: string;
  updateTaskForm = new FormGroup({
    taskName: new FormControl('',Validators.required),
    taskDesc: new FormControl(''),
    taskStatus: new FormControl('',Validators.required)
  })

  constructor(private afs: AngularFirestore, private actve: ActivatedRoute) { }

  updateTask(){
    //this.taskID = this.actve.snapshot.queryParamMap.get("/:id")
    // this.actve.queryParamMap.subscribe(queryParams => {
    //   let id = queryParams['id']
    //   this.taskID = queryParams.get("id")
    //   console.log(id)
    // })
    
    console.log(this.id)
    this.afs.collection('tasks').doc(this.id).ref.update({
      taskName: this.updateTaskForm.value.taskName,
      taskDesc: this.updateTaskForm.value.taskDesc,
      taskStatus: this.updateTaskForm.value.taskStatus
    })
    this.updateTaskForm.reset()
  }

  ngOnInit(): void {
    this.id = this.actve.snapshot.paramMap.get('id');
    console.log(this.id)
  }
}

