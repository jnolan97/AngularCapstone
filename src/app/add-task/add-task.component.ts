import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  // playerName;
  // user;
  taskName;
  user;
  addTaskForm = new FormGroup({
    taskName: new FormControl('',Validators.required),
    taskDesc: new FormControl(''),
    taskStatus: new FormControl('',Validators.required)
  })

  constructor(private userServ: UserService,private afs: AngularFirestore) { }

  getTaskData(){
    console.log(this.addTaskForm.value)
    this.afs.collection('tasks').add({
      taskName: this.addTaskForm.value.taskName,
      taskDesc: this.addTaskForm.value.taskDesc,
      taskStatus: this.addTaskForm.value.taskStatus
    })
    this.addTaskForm.reset()
  }

  ngOnInit(): void {
    this.userServ.getUser().then(user => {
      console.log(user.uid)
      this.user = user.uid;
    })
  }

}
